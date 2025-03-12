import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Box } from "@react-three/drei";
import { Typewriter } from "react-simple-typewriter";

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
        
        <button className="mt-6 bg-[#78C6A3] px-6 py-3 rounded text-white font-semibold">
          Book a Demo →
        </button>
      </div>

      <Canvas className="w-full h-full absolute top-0 left-0" camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} />
        <Suspense fallback={null}>
          <Box args={[2, 2, 2]} position={[0, 0, 0]}>
            <meshStandardMaterial attach="material" color="cyan" />
          </Box>
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>

      <p className="absolute bottom-45 text-gray-400 z-10">Press and drag to orbit</p>
    </section>
  );
};

export default SplineHero;
