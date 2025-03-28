import React from "react";
import Model3D from "../components/Model3D";
import LiveDemoFrom from "../components/LiveDemoForm";
import { StarIcon } from "@heroicons/react/24/solid"; // Icono de reloj para representar el tiempo de inactividad
import { motion } from "framer-motion";
import Card from "../components/CardProducts"; // Importar el componente Card

const ReviewsRatings = () => {
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
                        <StarIcon className="w-5 h-5 text-white" /> {/* Icono de reloj */}
                        <span className="text-white font-bold">REVIEWS & RATINGS</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-white">
                        Master Your Reviews with Dispute Dine
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl text-justify">
                        Centralize, manage, and enhance your reputation effortlessly with Dispute Dine.
                    </p>
                    <motion.button
                        className="mt-4 sm:mt-6 bg-[#78C6A3] px-4 sm:px-6 py-2 sm:py-3 !rounded-2xl text-white font-semibold w-full sm:w-auto"
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
            <section className="bg-[#FAFAFA] py-10 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto space-y-8 sm:space-y-16">
                    {/* Primer Card: Imagen a la izquierda, texto a la derecha */}
                    <Card
                        title="1. Consolidated Review Dashboard"
                        description="Reviews can make or break your restaurant's image. With Dispute Dine, see all your feedback from DoorDash, UberEats, GrubHub, and more in one place. Prioritize responses and engage customers like never before. Reduce manual efforts, boost satisfaction, and ensure every voice is heard."
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
                        title="2. Smart AI-Driven Responses"
                        description="Instantly craft personalized replies with Dispute Dine's AI, ensuring customers feel valued and understood. It prioritizes critical feedback, allowing businesses to address concerns swiftly. The result? Enhanced satisfaction, a stellar reputation, and more time to focus on what truly matters."
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
            <div className="bg-black py-10 sm:py-20 relative z-10">
                <LiveDemoFrom />
            </div>
        </div>
    );
};

export default ReviewsRatings;