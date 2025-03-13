import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Box } from "@react-three/drei";
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
      // Movimiento suave automático cuando no hay interacción
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
  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center flex-col text-white">
      <div className="absolute top-49 text-center z-10">
        <span className="bg-gray-800 text-sm px-4 py-1 rounded-full">
          #1 AI Restaurant Operations Automation Platform
        </span>

        {/* Typewriter Effect */}
        <h1 className="text-5xl font-bold mt-4 text-white stroke-text">
          Automate third-party{' '} <br />
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

        <p className="mt-4 text-lg max-w-2xl text-gray-300">
          Automate your disputes, reviews, finances, promotions, and downtime across DoorDash, UberEats, Grubhub, and more.
        </p>

        <motion.button
          className="mt-6 bg-[#78C6A3] px-8 py-3 !rounded-4xl text-white font-semibold"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }} // Se ejecuta cada vez que entra un 20% en la vista
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
        >
          Book a Demo →
        </motion.button>
      </div>

      <Canvas className="w-full h-full absolute top-0 left-0" camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} />
        <Suspense fallback={null}>
          {/* Se ha comentado el cubo y agregado la letra B */}
          {/* <Box args={[2, 2, 2]} position={[0, 0, 0]}>
            <meshStandardMaterial attach="material" color="cyan" />
          </Box> */}
          <LetterB />
        </Suspense>
        <CameraController /> {/* Cámara con movimiento automático */}
      </Canvas>

      <p className="absolute bottom-45 text-gray-400 z-10">Press and drag to orbit</p>
    </section>
  );
};

export default SplineHero;
