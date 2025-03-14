// src/pages/DisputeManager.jsx
import React from "react";
import Model3D from "../components/Model3D";
import LiveDemoFrom from "../components/LiveDemoForm";
import { ClockIcon } from "@heroicons/react/24/solid"; // Icono de reloj para representar el tiempo de inactividad
import { motion } from "framer-motion";
import Card from "../components/CardProducts"; // Importar el componente Card

const DowntimeController = () => {
    return (
        <div className="min-h-screen">
            {/* Sección Hero con Modelo 3D */}
            <div className="relative w-full h-[60vh] flex items-center justify-center text-center px-4">
                {/* Modelo 3D */}
                <div className="absolute inset-0 z-0">
                    <Model3D />
                </div>

                {/* Título superpuesto */}
                <div className="relative z-10 text-left pl-8 sm:pl-12 lg:pl-16">
                    <div className="flex items-center gap-2">
                        <ClockIcon className="w-5 h-5 text-white" /> {/* Icono de reloj */}
                        <span className="text-white font-bold">DOWNTIME CONTROLLER</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                        Eliminate Unexpected Store Closures
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl text-justify">
                        Downtime Controller monitors your store's status across DoorDash, Uber Eats, and more, ensuring you're always open for business when you need to be. With instant alerts, comprehensive analytics, and the ability to turn stores on or off with a click, Downtime Controller is your ultimate tool for minimizing downtime and maximizing revenue.
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
            <section className="bg-[#FAFAFA] py-20 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto space-y-16">
                    {/* Primer Card: Imagen a la izquierda, texto a la derecha */}
                    <Card
                        title="1. Real-Time Monitoring & Control"
                        description="Stay ahead with instant alerts and the ability to switch your stores on or off from a single dashboard. Downtime Controller seamlessly integrates with top delivery platforms like DoorDash and Uber Eats, ensuring your business remains operational at peak efficiency, no matter the external conditions."
                        imagePosition="left" // Imagen a la izquierda
                        backgroundColor="bg-[#99E2B4]" // Fondo verde claro
                    >
                        <img
                            src="https://picsum.photos/1280/720" // Reemplaza con tu imagen
                            alt="Real-Time Monitoring & Control"
                            className="w-full h-auto rounded-lg"
                        />
                    </Card>

                    {/* Segundo Card: Texto a la izquierda, imagen a la derecha */}
                    <Card
                        title="2. Advanced Analytics & Impact Assessment"
                        description="Make informed decisions with a detailed analysis of downtime trends and their revenue implications. From understanding the 'why' behind each downtime instance to quantifying its impact, the Downtime Controller transforms data into actionable insights, driving your business towards operational excellence and enhanced profitability."
                        imagePosition="right" // Imagen a la derecha
                        backgroundColor="bg-[#56AB92]" // Fondo verde oscuro
                    >
                        <img
                            src="https://picsum.photos/1280/720" // Reemplaza con tu imagen
                            alt="Advanced Analytics & Impact Assessment"
                            className="w-full h-auto rounded-lg"
                        />
                    </Card>
                </div>
            </section>

            {/* Componente LiveDemoForm con fondo negro */}
            <div className="bg-black py-20 relative z-10">
                <LiveDemoFrom />
            </div>
        </div>
    );
};

export default DowntimeController;