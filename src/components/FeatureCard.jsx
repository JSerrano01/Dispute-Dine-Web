// src/components/FeatureCard.jsx
import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description, buttonText, buttonLink }) => {
    return (
        <motion.div
            className="bg-[#FAFAFA] p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Ícono */}
            <div className="text-[#56AB92] text-4xl mb-4">{icon}</div>

            {/* Título */}
            <h3 className="text-xl font-bold text-black mb-2">{title}</h3>

            {/* Descripción */}
            <p className="text-gray-400 mb-4">{description}</p>

            {/* Botón */}
            <a
                href={buttonLink}
                className="bg-[#56AB92] text-white px-4 py-2 rounded-md hover:bg-[#78C6A3] transition-colors duration-300"
            >
                {buttonText}
            </a>
        </motion.div>
    );
};

export default FeatureCard; // Exportación por defecto