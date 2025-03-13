import React from "react";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { Rocket } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";


// Datos del gráfico
const data = [
    { value: 10 },
    { value: 30 },
    { value: 20 },
    { value: 50 },
    { value: 45 },
    { value: 70 },
    { value: 100 },
];

// Componente del gráfico
const PromotionsGraph = () => {
    return (
        <div className="w-full h-40 mt-6">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <pattern id="striped" patternUnits="userSpaceOnUse" width="6" height="4">
                            <line x1="0" y="0" x2="0" y2="4" stroke="white" strokeWidth="4" />
                        </pattern>
                    </defs>
                    <Area type="monotone" dataKey="value" stroke="none" fill="url(#striped)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

const DashboardContainer = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-6 p-6 bg-[#FAFAFA] min-h-item">
            {/* Dispute Manager (70% de ancho) */}
            <div className="w-[70%] bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 text-gray-500 font-semibold">
                    <ChatBubbleLeftEllipsisIcon className="w-5 h-5" />
                    <span>DISPUTE MANAGER</span>
                </div>
                <h2 className="text-3xl font-bold mt-2">
                    Recoup Lost <span className="text-[#56AB92]">Profits</span>
                </h2>
                <p className="text-gray-500 mt-2">
                    Manage and reclaim lost profits from disputes on third-party marketplaces efficiently in one platform.
                </p>

                {/* Etiquetas de marketplaces */}
                <div className="flex gap-2 mt-4">
                    {["DOORDASH", "UBER EATS", "GRUBHUB", "DOORDASH DRIVE"].map((item, index) => (
                        <motion.span
                            key={item}
                            className="bg-[#56AB92] text-[#FAFAFA] px-3 py-2 text-sm font-semibold rounded-md max-md:px-0 max-md:text-xs"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{
                                duration: 0.2, // Animación más rápida
                                delay: index * 0.3, // Cascada rápida (cada uno aparece con 0.15s de diferencia)
                                ease: "easeOut",
                            }}
                        >
                            {item}
                        </motion.span>
                    ))}
                </div>

                {/* Caja de Resumen de Disputas */}
                <div className="relative">
                    <div className="bg-[#FAFAFA] p-3 rounded-xl mt-6 shadow-2xl z-10 absolute max-h-item w-65">
                        <p className="text-black text-base font-bold leading-7 mb-0">Resolved dispute amount</p>
                        <p className="text-[#56AB92] text-4xl font-medium leading-10 mb-0">$5,546</p>
                        <p className="text-gray-500 text-base leading-7 !mt-7">Disputed orders: 870</p>
                    </div>
                </div>

                {/* Lista de disputas */}
                <div className="mt-40 bg-white p-4 rounded-xl shadow-2xl">
                    <div className="w-full text-center font-bold text-gray-500 pb-2">DISPUTE AMOUNT</div>
                    {[
                        { name: "Russell T", amount: "$12.99", logo: "https://i.imgur.com/hjGKJ7T.png" },
                        { name: "Hannah", amount: "$16.10", logo: "https://i.imgur.com/sjT2Fpz.png" },
                        { name: "Joey", amount: "$22.09", logo: "https://i.imgur.com/hXq7z6U.png" }
                    ].map((user, index, arr) => (
                        <div
                            key={user.name}
                            className={`grid grid-cols-[1.5fr_1fr_auto] items-center gap-4 py-3 ${index !== arr.length - 1 ? "" : ""}`}
                        >
                            {/* Logo y Nombre (en la misma fila) */}
                            <div className="flex items-center gap-3">
                                <img src={user.logo} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                                <p className="text-gray-700 font-medium">{user.name}</p>
                            </div>

                            {/* Precio (centrado) */}
                            <p className="text-gray-500 font-semibold text-center">{user.amount}</p>

                            {/* Botón */}
                            <span className="bg-[#78C6A3] border border-[#78C6A3] !text-[#FAFAFA] px-4 py-2 rounded-3xl font-normal text-sm transition-colors duration-300 hover:bg-[#56AB92] hover:text-white">
                                Dispute
                            </span>
                        </div>
                    ))}
                </div>
                <div className="mt-15">
                    <motion.button
                        className="border-1 border-[#99E2B4] px-4 py-2 !rounded-2xl text-[#56AB92] flex items-center gap-2 hover:bg-[#56AB92] hover:text-[#FAFAFA] transition-colors duration-500"
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }} // Se ejecuta cada vez que entra un 20% en la vista
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 10,
                        }}
                    >
                        View Details ➝
                    </motion.button>
                </div>
            </div>

            {/* Promotions Manager (30% de ancho) */}
            <div className="w-[45%] rounded-xl shadow-lg p-6 bg-[#56AB92]">
                <div className="flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-[#FAFAFA]" />
                    <span className="font-semibold text-[#FAFAFA]">PROMOTIONS MANAGER</span>
                </div>
                <h2 className="!text-[#FAFAFA] !text-4xl font-bold mt-2">Boost Your Marketing ROI</h2>
                <p className="mt-2 text-[#FAFAFA] !text-4sm">
                    Seamlessly configure, manage, and track the effectiveness of your promotions across third-party marketplaces from a single, centralized dashboard.
                </p>

                {/* Etiquetas de marketplaces */}
                <div className="flex gap-2 mt-4 font-medium">
                    {["DOORDASH", "UBER EATS", "GRUBHUB"].map((item, index) => (
                        <motion.span
                            key={item}
                            className="bg-[#99E2B4] !border-[#99E2B4] px-3 py-2 text-sm rounded-md text-[#FAFAFA] max-md:px-1 max-md:text-xs"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{
                                duration: 0.2, // Animación más rápida
                                delay: index * 0.3, // Cascada rápida (cada uno aparece con 0.15s de diferencia)
                                ease: "easeOut",
                            }}
                        >
                            {item}
                        </motion.span>
                    ))}
                </div>

                {/* Gráfico */}
                <div className="mt-6">
                    <PromotionsGraph />
                </div>
                {/* Botón de detalles */}
                <div className="mt-65 bottom-0">
                    <motion.button
                        className="border border-white px-4 py-2 !rounded-2xl text-[#FAFAFA] flex items-center gap-2 hover:bg-white hover:text-[#56AB92] transition-colors duration-500"
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }} // Se ejecuta cada vez que entra un 20% en la vista
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 10,
                        }}
                    >
                        View Details ➝
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default DashboardContainer;
