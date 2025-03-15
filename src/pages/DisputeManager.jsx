import React from "react";
import Model3D from "../components/Model3D";
import ROICalculator from "../components/ROICalculator";
import LiveDemoFrom from "../components/LiveDemoForm";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Card from "../components/CardProducts"; // Importar el componente Card

const DisputeManager = () => {
    return (
        <div className="min-h-screen">
            {/* Sección Hero con Modelo 3D */}
            <div className="relative w-full h-[60vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                {/* Modelo 3D */}
                <div className="absolute inset-0 z-0">
                    <Model3D />
                </div>

                {/* Título superpuesto */}
                <div className="relative z-10 text-left pl-8 sm:pl-12 lg:pl-16">
                    <div className="flex items-center gap-2">
                        <ChatBubbleLeftEllipsisIcon className="w-5 h-5 text-white" />
                        <span className="text-white font-bold">DISPUTE MANAGER</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                        Protecting Your Restaurant's Bottom Line
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl text-justify">
                        All your disputes, one dashboard. Stay on top of issues, monitor progress, and see your financial recovery in real-time.
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
            </div>

            {/* Nueva sección: Take Control y Maximize Resolutions */}
            <section className="bg-[#FAFAFA] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
                    {/* Primer Card: Imagen a la izquierda, texto a la derecha */}
                    <Card
                        title="1. Take Control with Voosh's Dispute Manager"
                        description="Disputes can drain time and profits. With Voosh's Dispute Manager, centralize all your issues, automate responses, and recover lost revenue faster. Say goodbye to manual tracking and endless back-and-forths. Let us handle the disputes while you focus on delighting your customers."
                        imagePosition="left" // Imagen a la izquierda
                        backgroundColor="bg-[#99E2B4]" // Fondo azul claro
                    >
                        <img
                            src="https://picsum.photos/1280/720" // Reemplaza con tu imagen
                            alt="Take Control"
                            className="w-full h-auto rounded-lg"
                        />
                    </Card>

                    {/* Segundo Card: Texto a la izquierda, imagen a la derecha */}
                    <Card
                        title="2. Maximize Resolutions, Minimize Hassles"
                        description="Unresolved disputes can tarnish your restaurant's reputation and hurt revenues. Voosh's Dispute Manager proactively identifies and addresses issues, ensuring maximum resolutions with minimum effort. Streamline the dispute process, protect your earnings, and focus on what you do best - serving delicious meals."
                        imagePosition="right" // Imagen a la derecha
                        backgroundColor="bg-[#56AB92]" // Fondo verde claro
                    >
                        <img
                            src="https://picsum.photos/1280/720" // Reemplaza con tu imagen
                            alt="Maximize Resolutions"
                            className="w-full h-auto rounded-lg"
                        />
                    </Card>
                </div>
            </section>

            {/* Componente ROICalculator */}
            <div className="bg-[#FAFAFA] py-12 sm:py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ROICalculator />
                </div>
            </div>

            {/* Componente LiveDemoForm con fondo negro */}
            <div className="bg-black py-12 sm:py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <LiveDemoFrom />
                </div>
            </div>
        </div>
    );
};

export default DisputeManager;