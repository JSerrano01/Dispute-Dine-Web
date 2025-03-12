import React from "react";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { Rocket } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

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
        <div className="flex gap-6 p-6 bg-[#FAFAFA] min-h-item">
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
                    {["DOORDASH", "UBER EATS", "GRUBHUB", "DOORDASH DRIVE"].map((item) => (
                        <span key={item} className="bg-[#56AB92] text-[#FAFAFA] px-3 py-2 text-sm font-semibold rounded-md">
                            {item}
                        </span>
                    ))}
                </div>

                {/* Caja de Resumen de Disputas */}
                <div className="bg-[#FAFAFA] p-3 rounded-xl mt-6 shadow-md z-10 absolute max-h-item w-65">
                    <p className="text-black text-base font-bold leading-7 mb-0">Resolved dispute amount</p>
                    <p className="text-green-600 text-4xl font-medium leading-10 mb-0">$5,546</p>
                    <p className="text-gray-500 text-base leading-7 !mt-7">Disputed orders: 870</p>
                </div>

                {/* Lista de disputas */}
                <div className="mt-40 bg-white p-4 rounded-xl shadow-md">
                    {[{ name: "Russell T", amount: "$12.99", logo: <img src="https://picsum.photos/50/50" alt="" className="rounded-full" /> },
                        { name: "Hannah", amount: "$16.10", logo: <img src="https://picsum.photos/50/50" alt="" className="rounded-full" /> },
                        { name: "Joey", amount: "$22.09", logo: <img src="https://picsum.photos/50/50" alt="" className="rounded-full" /> }].map((user) => (
                        <div key={user.name} className="flex justify-between items-center py-2 border-b">
                            <div className="flex items-center gap-2">
                                <span>{user.logo}</span>
                                <p className="text-gray-700">{user.name}</p>
                            </div>
                            <p className="text-gray-600">{user.amount}</p>
                                <button className="text-[#56AB92] bg-[#99E2B4] px-3 py-1 !rounded-2xl text-sm">Dispute</button>
                        </div>
                    ))}
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
                    {["DOORDASH", "UBER EATS", "GRUBHUB"].map((item) => (
                        <span key={item} className="bg-[#99E2B4] !border-[#99E2B4]  px-3 py-2 text-sm rounded-md text-[#FAFAFA]">
                            {item}
                        </span>
                    ))}
                </div>

                {/* Gráfico */}
                <div className="mt-6">
                    <PromotionsGraph />
                </div>
                {/* Botón de detalles */}
                <div className="mt-40">
                    <button className="border border-white px-4 py-2 !rounded-2xl text-[#FAFAFA] flex items-center gap-2 hover:bg-white hover:text-[#56AB92] transition">
                        View Details ➝
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DashboardContainer;
