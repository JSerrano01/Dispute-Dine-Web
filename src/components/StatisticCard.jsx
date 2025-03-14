// src/components/StatisticCard.jsx
import React from "react";

const StatisticCard = ({ icon, value, description }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-[#56AB92] mb-4">{icon}</div>
            <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default StatisticCard;