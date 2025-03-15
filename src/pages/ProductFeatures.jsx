// src/pages/ProductFeatures.jsx
import React from "react";
import FeatureCard from "../components/FeatureCard";
import SectionTitle from "../components/SectionTitle";
import {
    ChartBarIcon,
    RocketLaunchIcon,
    ClockIcon,
    StarIcon,
    CurrencyDollarIcon,
    ChartPieIcon,
} from "@heroicons/react/24/solid";
import Model3D from "../components/Model3D";
import ROICalculator from "../components/ROICalculator";
import { useNavigate } from "react-router-dom"; // Importar useNavigate

const ProductFeatures = () => {
    const navigate = useNavigate(); // Usar useNavigate para la navegación

    const features = [
        {
            icon: <ChartBarIcon className="w-10 h-10" />,
            title: "Dispute Manager",
            description: "Take Control of Your Revenue",
            buttonText: "Learn More",
            buttonLink: "/dispute-manager",
        },
        {
            icon: <RocketLaunchIcon className="w-10 h-10" />,
            title: "Promotion Manager",
            description: "Drive Exceptional Campaign Results",
            buttonText: "Learn More",
            buttonLink: "/promotion-manager",
        },
        {
            icon: <ClockIcon className="w-10 h-10" />,
            title: "Downtime Controller",
            description: "Maximize Revenue with Zero Downtime",
            buttonText: "Learn More",
            buttonLink: "/downtime-controller",
        },
        {
            icon: <StarIcon className="w-10 h-10" />,
            title: "Reviews & Ratings",
            description: "Manage Your Online Reputation",
            buttonText: "Learn More",
            buttonLink: "/reviews-ratings",
        },
        {
            icon: <CurrencyDollarIcon className="w-10 h-10" />,
            title: "Finance & Reconciliation",
            description: "Simplify Your Finances",
            buttonText: "Learn More",
            buttonLink: "/finance-reconciliation",
        },
        {
            icon: <ChartPieIcon className="w-10 h-10" />,
            title: "Analytics & Insights",
            description: "Unlock the Power of Data",
            buttonText: "Learn More",
            buttonLink: "/analytics-insights",
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Sección Hero con Modelo 3D */}
            <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] flex items-center justify-center text-center px-4">
                {/* Modelo 3D */}
                <div className="absolute inset-0 z-0">
                    <Model3D />
                </div>

                {/* Título superpuesto */}
                <div className="relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                        Product Features
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        Explore the powerful features designed to streamline your restaurant operations and maximize revenue.
                    </p>
                </div>
            </div>

            {/* Sección de características */}
            <section className="relative z-10 bg-[#FAFAFA] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Título de la sección (opcional) */}
                    <SectionTitle title="Key Features" subtitle="What We Offer" />

                    {/* Grid de tarjetas */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                {...feature}
                                onClick={() => navigate(feature.buttonLink)} // Usar navigate para redirigir
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Componente ROICalculator */}
            <div className="bg-[#FAFAFA] py-12 sm:py-16 lg:py-20">
                <ROICalculator />
            </div>
        </div>
    );
};

export default ProductFeatures;