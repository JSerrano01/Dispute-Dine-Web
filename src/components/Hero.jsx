import React, { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

// Error Boundary para manejar errores en el Canvas
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-white text-center p-4">
          Ocurrió un error al cargar el modelo 3D. Por favor recarga la página.
        </div>
      );
    }
    return this.props.children;
  }
}

// Control de la cámara con movimiento automático
function CameraController() {
  const controlsRef = useRef();
  const [isInteracting, setIsInteracting] = useState(false);

  const onStart = () => setIsInteracting(true);
  const onEnd = () => setIsInteracting(false);

  useFrame(() => {
    if (!isInteracting && controlsRef.current) {
      controlsRef.current.setAzimuthalAngle(
        controlsRef.current.getAzimuthalAngle() + 0.01
      );
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
function Model() {
  // IMPORTANTE: Asegúrate de que el archivo existe en public/models/DD_logo.glb
  // También puedes importarlo directamente así:
  // import modelUrl from '/models/DD_logo.glb';
  // const { scene } = useGLTF(modelUrl);
  const { scene } = useGLTF("/models/DD_logo.glb");

  return <primitive object={scene} scale={0.5} position={[-1.5, -1.2, 0]} />;
}

const SplineHero = () => {
  const [cameraPosition, setCameraPosition] = useState([0, 0, 5]); // Default en PC
  const [webglContextLost, setWebglContextLost] = useState(false);

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

    // Manejar pérdida de contexto WebGL
    const handleContextLost = (event) => {
      event.preventDefault();
      setWebglContextLost(true);
      console.error("WebGL context lost. Please refresh the page.");
    };

    const canvas = document.querySelector("canvas");
    if (canvas) {
      canvas.addEventListener("webglcontextlost", handleContextLost, false);
    }

    return () => {
      window.removeEventListener("resize", updateCameraPosition);
      if (canvas) {
        canvas.removeEventListener("webglcontextlost", handleContextLost, false);
      }
    };
  }, []);

  if (webglContextLost) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-xl mb-4">Error de renderizado 3D</h2>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#78C6A3] hover:bg-[#56AB92] px-6 py-3 rounded-2xl text-white font-semibold"
          >
            Recargar Página
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center flex-col text-white px-4 sm:px-6">
      <div className="absolute top-32 text-center z-10">
        <span className="bg-gray-800 text-xs sm:text-sm px-3 py-1 rounded-full">
          #1 AI Restaurant Operations Automation Platform
        </span>

        {/* Typewriter Effect */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-2 sm:mt-4 text-white">
          Automate third-party <br />
          <span className="text-[#78C6A3]">
            <Typewriter
              words={["promotions", "disputes", "finances"]}
              loop={0} // infinito
              cursor
              cursorStyle=","
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
            <br />
          </span>{" "}
          in <span className="text-[#78C6A3]">minutes.</span>
        </h1>

        <p className="mt-2 sm:mt-4 text-sm sm:text-lg max-w-xs sm:max-w-md md:max-w-2xl text-gray-300 mx-auto">
          Automate your disputes, finance and analytics across DoorDash,
          UberEats, Grubhub, and more.
        </p>

        <motion.a
          href="https://calendly.com/kory-disputedine/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 sm:mt-6 bg-[#78C6A3] hover:bg-[#56AB92] px-6 sm:px-8 py-2 sm:py-3 !rounded-2xl text-white font-semibold w-full sm:w-auto inline-block text-center transition-colors duration-300"
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
        </motion.a>
      </div>

      <ErrorBoundary>
        <Canvas
          className="w-full h-full absolute top-0 left-0"
          camera={{ position: cameraPosition }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 3, 6]} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <CameraController />
        </Canvas>
      </ErrorBoundary>

      {/* Texto "Press and drag to orbit" más arriba */}
      <p className="absolute top-[70%] !text-lg sm:text-sm text-gray-400 z-10">
        Press and drag to orbit
      </p>
    </section>
  );
};

export default SplineHero;