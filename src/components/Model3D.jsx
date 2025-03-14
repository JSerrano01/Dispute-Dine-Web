import React, { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// Control de la cámara con movimiento automático
function CameraController() {
  const controlsRef = useRef();
  const [isInteracting, setIsInteracting] = useState(false);

  const onStart = () => setIsInteracting(true);
  const onEnd = () => setIsInteracting(false);

  useFrame(() => {
    if (!isInteracting && controlsRef.current) {
      controlsRef.current.setAzimuthalAngle(controlsRef.current.getAzimuthalAngle() + 0.01);
      controlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      onStart={onStart}
      onEnd={onEnd}
    />
  );
}

// Modelo 3D sin la letra ni textos
function ModelOnly() {
  const { scene } = useGLTF("/models/B_letter.glb"); // Carga desde public/

  return <primitive object={scene} scale={1.0} position={[0, 0, 0]} />; // Escala reducida
}

const Model3D = () => {
  const [cameraPosition, setCameraPosition] = useState([0, 0, 5]); // Default en PC

  useEffect(() => {
    // Ajustar la cámara dependiendo del tamaño de la pantalla
    const updateCameraPosition = () => {
      if (window.innerWidth < 768) {
        setCameraPosition([0, 0, 7]); // Más lejos en móviles
      } else {
        setCameraPosition([0, 0, 5]); // Normal en pantallas grandes
      }
    };

    updateCameraPosition(); // Ajustar al cargar
    window.addEventListener("resize", updateCameraPosition); // Detectar cambios

    return () => window.removeEventListener("resize", updateCameraPosition);
  }, []);

  return (
    <div className="w-full h-[800px] bg-black"> {/* Altura reducida */}
      <Canvas className="w-full h-full" camera={{ position: cameraPosition }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} />
        <Suspense fallback={null}>
          <ModelOnly />
        </Suspense>
        <CameraController />
      </Canvas>
    </div>
  );
};

export default Model3D;