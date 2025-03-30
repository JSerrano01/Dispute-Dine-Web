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
  const { scene } = useGLTF("/models/DD_logo.glb"); // Carga desde public/

  return <primitive object={scene} scale={0.4} position={[-1.5, 0, 0]} />; // Escala reducida
}

const Model3D = () => {
  const [cameraPosition, setCameraPosition] = useState([0, 0, 5]); // Default en PC
  const [containerHeight, setContainerHeight] = useState("800px"); // Altura inicial

  useEffect(() => {
    // Ajustar la cámara y el contenedor dependiendo del tamaño de la pantalla
    const updateLayout = () => {
      if (window.innerWidth < 768) {
        setCameraPosition([0, 0, 7]); // Más lejos en móviles
        setContainerHeight("500px"); // Altura reducida para móviles
      } else {
        setCameraPosition([0, 0, 5]); // Normal en pantallas grandes
        setContainerHeight("800px"); // Altura normal para pantallas grandes
      }
    };

    updateLayout(); // Ajustar al cargar
    window.addEventListener("resize", updateLayout); // Detectar cambios

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <div className="w-full" style={{ height: containerHeight, backgroundColor: 'black', position: 'relative' }}>
      <Canvas className="w-full h-full" camera={{ position: cameraPosition }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} />
        <Suspense fallback={null}>
          <ModelOnly />
        </Suspense>
        <CameraController />
      </Canvas>

      {/* Texto "Press and drag to orbit" */}
      {/* <p className="absolute top-[60%] left-1/2 transform -translate-x-1/2 text-lg sm:text-sm text-gray-400 z-10">
        Press and drag to orbit
      </p> */}
    </div>
  );
};

export default Model3D;