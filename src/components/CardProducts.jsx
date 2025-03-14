// src/components/CardProducts.jsx
import React from "react";

const Card = ({ title, description, children, imagePosition = "left", backgroundColor = "bg-white" }) => {
    return (
        <div className={`${backgroundColor} p-8 rounded-lg shadow-lg`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Contenido (imagen o cualquier otro elemento) */}
                <div className={imagePosition === "left" ? "order-1" : "order-2"}>
                    {children}
                </div>

                {/* Contenedor de texto (título y descripción) */}
                <div className={imagePosition === "left" ? "order-2" : "order-1"}>
                    {/* Título con borde inferior */}
                    <div className="border-b-2 border-[#FAFAFA] pb-4 mb-4">
                        <h2 className="!text-2xl md:text-4xl font-bold text-gray-900">{title}</h2>
                    </div>
                    {/* Descripción */}
                    <p className="!text-base text-gray-600">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;