import React, { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

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

// Modelo 3D de la letra B
function LetterB() {
  const { scene } = useGLTF("/models/B_letter.glb"); // Carga desde public/

  return <primitive object={scene} scale={1.5} position={[0, 0, 0]} />;
}

const SplineHero = () => {
  const [cameraPosition, setCameraPosition] = useState([0, 0, 5]); // Default en PC

  useEffect(() => {
    // Detectar tamaño de pantalla y ajustar la cámara
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
    <section className="relative w-full h-screen bg-black flex items-center justify-center flex-col text-white px-4 sm:px-6">
      <div className="absolute top-32 text-center z-10">
        <span className="bg-gray-800 text-xs sm:text-sm px-3 py-1 rounded-full">
          #1 AI Restaurant Operations Automation Platform
        </span>

        {/* Typewriter Effect */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-2 sm:mt-4 text-white">
          Automate third-party{" "} <br />
          <span className="text-[#78C6A3]">
            <Typewriter
              words={["promotions", "disputes", "reviews", "finances", "downtime"]}
              loop={0} // infinito
              cursor
              cursorStyle=","
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
            <br />
          </span> in <span className="text-[#78C6A3]">minutes.</span>
        </h1>

        <p className="mt-2 sm:mt-4 text-sm sm:text-lg max-w-xs sm:max-w-md md:max-w-2xl text-gray-300 mx-auto">
          Automate your disputes, reviews, finances, promotions, and downtime across DoorDash, UberEats, Grubhub, and more.
        </p>

        <motion.button
          className="mt-4 sm:mt-6 bg-[#78C6A3] px-6 sm:px-8 py-2 sm:py-3 !rounded-2xl text-white font-semibold w-full sm:w-auto"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
        >
          Book a Demo →
        </motion.button>
      </div>

      <Canvas className="w-full h-full absolute top-0 left-0" camera={{ position: cameraPosition }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} />
        <Suspense fallback={null}>
          <LetterB />
        </Suspense>
        <CameraController />
      </Canvas>

      <p className="absolute bottom-10 text-xs sm:text-sm text-gray-400 z-10">
        Press and drag to orbit
      </p>
    </section>
  );
};

export default SplineHero;
