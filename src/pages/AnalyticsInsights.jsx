import React from "react";
import Model3D from "../components/Model3D";
import LiveDemoFrom from "../components/LiveDemoForm";
import { ChartBarIcon } from "@heroicons/react/24/solid"; // Icono de gráfico para representar análisis
import { motion } from "framer-motion";
import Card from "../components/CardProducts"; // Importar el componente Card

const AnalyticsInsights = () => {
    return (
        <div className="min-h-screen">
            {/* Sección Hero con Modelo 3D */}
            <div className="relative w-full h-[60vh] flex items-center justify-center text-center px-4">
                {/* Modelo 3D */}
                <div className="absolute inset-0 z-0">
                    <Model3D />
                </div>

                {/* Título superpuesto */}
                <div className="relative z-10 text-left pl-4 sm:pl-8 lg:pl-16">
                    <div className="flex items-center gap-2">
                        <ChartBarIcon className="w-5 h-5 text-white" /> {/* Icono de gráfico */}
                        <span className="text-white font-bold">ANALYTICS & INSIGHTS</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-white">
                        Empower Your Decisions with Analytics & Insights
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl text-justify">
                        Easily navigate insights across platforms, transforming data into strategies that drive growth.
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
            </div>

            {/* Nueva sección: Centralized Analytics Overview */}
            <section className="bg-[#FAFAFA] py-10 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto space-y-8 sm:space-y-16">
                    {/* Primer Card: Imagen a la izquierda, texto a la derecha */}
                    <Card
                        title="Centralized Analytics Overview"
                        description="Overwhelmed with managing third-party marketplace data? Let Dispute Dine do the heavy lifting! Get a 360° view of your operations, from sales to reviews, without the manual hassle. Boost your bottom line and discover untapped opportunities."
                        imagePosition="left" // Imagen a la izquierda
                        backgroundColor="bg-[#99E2B4]" // Fondo verde claro
                    >
                        <img
                            src="https://picsum.photos/1280/720" // Reemplaza con tu imagen
                            alt="Centralized Analytics Overview"
                            className="w-full h-auto rounded-lg"
                        />
                    </Card>

                    {/* Segundo Card: Texto a la izquierda, imagen a la derecha */}
                    <Card
                        title="Data-Driven Decision Making"
                        description="Leverage actionable insights to make informed decisions. Our analytics tools provide detailed reports on sales performance, customer behavior, and market trends, helping you optimize your strategies and maximize profitability."
                        imagePosition="right" // Imagen a la derecha
                        backgroundColor="bg-[#56AB92]" // Fondo verde oscuro
                    >
                        <img
                            src="https://picsum.photos/1280/720" // Reemplaza con tu imagen
                            alt="Data-Driven Decision Making"
                            className="w-full h-auto rounded-lg"
                        />
                    </Card>
                </div>
            </section>

            {/* Componente LiveDemoForm con fondo negro */}
            <div className="bg-black py-10 sm:py-20 relative z-10">
                <LiveDemoFrom />
            </div>
        </div>
    );
};

export default AnalyticsInsights;