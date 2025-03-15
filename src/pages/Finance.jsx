import React from "react";
import Model3D from "../components/Model3D";
import LiveDemoFrom from "../components/LiveDemoForm";
import { BanknotesIcon } from "@heroicons/react/24/solid"; // Icono de reloj para representar el tiempo de inactividad
import { motion } from "framer-motion";
import Card from "../components/CardProducts"; // Importar el componente Card

const DowntimeController = () => {
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
                        <BanknotesIcon className="w-5 h-5 text-white" /> {/* Icono de reloj */}
                        <span className="text-white font-bold">FINANCE AND RECONCILIATION</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                        Financial Reconciliation Made Simple
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl text-justify">
                        Instantly see why your actual payout differs from your estimated payout, reconcile POS data with off-premise orders, and dive into detailed transaction insights to ensure accuracy and boost profitability.
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
                        title="1. Estimated vs. Actual Payouts"
                        description="See Exactly What You Should Get Paid: Compare your expected payouts with the actual amounts deposited. Instantly identify and resolve discrepancies, whether they're due to fees, commissions, or marketing adjustments, so you can ensure that every dollar is accounted for."
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
                        title="2. POS vs. Off-Premise Reconciliation"
                        description="Align Your Sales Data Across All Channels: Reconcile your POS data with off-premise orders from platforms like UberEats and DoorDash. This feature ensures that your sales data matches up, giving you a unified view of your finances and preventing any revenue loss."
                        imagePosition="right" // Imagen a la derecha
                        backgroundColor="bg-[#56AB92]" // Fondo verde oscuro
                    >
                        <img
                            src="https://picsum.photos/1280/720" // Reemplaza con tu imagen
                            alt="Advanced Analytics & Impact Assessment"
                            className="w-full h-auto rounded-lg"
                        />
                    </Card>

                    {/* Tercer Card: Imagen a la izquierda, texto a la derecha */}
                    <Card
                        title="3. Detailed Transaction Insights"
                        description="Get to the Bottom of Every Transaction: Our dashboard provides a detailed breakdown of every transaction, helping you understand exactly where your money is going. From marketing fees to payment adjustments, you'll have the clarity you need to manage your finances confidently."
                        imagePosition="left" // Imagen a la izquierda
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
            <div className="bg-black py-12 sm:py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <LiveDemoFrom />
                </div>
            </div>
        </div>
    );
};

export default DowntimeController;