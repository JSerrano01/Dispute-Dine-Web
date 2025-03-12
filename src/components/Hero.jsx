import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

// Cargar modelo GLB desde public/models
function Model() {
    const gltf = useGLTF("/public/models/1.glb"); // Asegúrate de reemplazar con el nombre correcto
    return <primitive object={gltf.scene} scale={1.5} position={[0, 1, 0]} />;
}

// Modelo 3D con movimiento suave
function Cube() {
    const cubeRef = useRef();

    useFrame(({ mouse }) => {
        if (cubeRef.current) {
            cubeRef.current.rotation.y = mouse.x * Math.PI * 0.1; // Ajuste en Y
            cubeRef.current.rotation.x = -mouse.y * Math.PI * 0.1; // Ajuste en X (invertido)
        }
    });

    return (
        <mesh ref={cubeRef} position={[0, 1, 0]}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshStandardMaterial color="cyan" metalness={0.8} roughness={0.2} />
        </mesh>
    );
}

// Suelo reflejante
function Floor() {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color="#111" metalness={1} roughness={0.3} />
        </mesh>
    );
}

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-white text-center p-8">
            {/* Texto en primer plano */}
            <div className="relative z-10 pointer-events-none"> {/* Evita que el texto interrumpa el mouse */}
                <span className="bg-gray-800 text-sm px-4 py-1 rounded-full">
                    #1 AI Restaurant Operations Automation Platform
                </span>
                <h1 className="text-5xl font-bold mt-4 text-white stroke-text">
                    Automate third-party promotions in <span className="text-blue-300">minutes.</span>
                </h1>
                <p className="mt-4 text-lg max-w-2xl text-gray-300">
                    Automate your disputes, reviews, finances, promotions, and downtime across DoorDash, UberEats, Grubhub, and more.
                </p>
                <button className="mt-6 bg-[#78C6A3] px-6 py-3 rounded text-white font-semibold">
                    Book a Demo →
                </button>
            </div>

            {/* Modelo 3D */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Canvas camera={{ position: [0, 1, 5] }} eventSource={document.body} style={{ background: "black" }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} />
                    <Cube />
                    {/* <Suspense>
                        <Model />
                    </Suspense> */}
                    <Floor />
                </Canvas>
            </div>
        </section>
    );
}
