import React from "react";
import Model3D from "../components/Model3D";
import LiveDemoFrom from "../components/LiveDemoForm";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Card from "../components/CardProducts"; // Importar el componente Card

const PromotionManager = () => {
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
                        <RocketLaunchIcon className="w-5 h-5 text-white" />
                        <span className="text-white font-bold">PROMOTIONS MANAGER</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                        Streamline Your Restaurant's Marketing Campaigns
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl text-justify">
                        Set up, manage, and track your restaurant promotions across various third-party delivery platforms from a single dashboard. Get detailed insights on sales, ROI, customer engagement, and more. Make informed decisions, tweak campaigns as needed, and ensure every dollar spent is effective.
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
                        title="1. Comprehensive Campaign Configuration"
                        description="Gain the ability to configure every aspect of your campaigns. Set up targeted offers across different platforms and adjust your ads and promotions based on real-time data. Dispute Dine offers unparalleled control at your fingertips, ensuring that your promotional activities are not just tracked but strategically crafted to meet your business objectives."
                        imagePosition="left" // Imagen a la izquierda
                        backgroundColor="bg-[#99E2B4]" // Fondo verde claro
                    >
                        <img
                            src="https://picsum.photos/1280/720" // Reemplaza con tu imagen
                            alt="Comprehensive Campaign Configuration"
                            className="w-full h-auto rounded-lg"
                        />
                    </Card>

                    {/* Segundo Card: Texto a la izquierda, imagen a la derecha */}
                    <Card
                        title="2. Data-Driven Insights for Smarter Decisions"
                        description="Elevate your promotional strategy with actionable insights derived from comprehensive data analysis. Dispute Dine’s Promotions Manager goes beyond traditional tracking, offering a detailed view into campaign performance, customer engagement, ROI, and more. Adjust your strategies on the fly, ensuring that every campaign is optimized for success."
                        imagePosition="right" // Imagen a la derecha
                        backgroundColor="bg-[#56AB92]" // Fondo verde oscuro
                    >
                        <img
                            src="https://picsum.photos/1280/720" // Reemplaza con tu imagen
                            alt="Data-Driven Insights"
                            className="w-full h-auto rounded-lg"
                        />
                    </Card>
                </div>
            </section>

            {/* Componente LiveDemoForm con fondo negro */}
            <div className="bg-black py-12 sm:py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <LiveDemoFrom />
                </div>
            </div>
        </div>
    );
};

export default PromotionManager;