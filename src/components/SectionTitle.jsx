// src/components/SectionTitle.jsx
import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ title, description }) => {
    return (
        <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{description}</p>
        </motion.div>
    );
};

export default SectionTitle;