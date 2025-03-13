import React from "react";

const Banner = () => {
    return (
        <div className="flex items-center justify-center bg-transparent p-4 md:p-8">
            {/* Contenedor del texto y el botón */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 md:p-8 shadow-md rounded-lg w-full max-w-4xl text-center md:text-left">
                <p className="text-base md:text-lg font-semibold text-black mb-4 md:mb-0">
                    Unleash Your Restaurant's Potential with {" "}
                    <span className="text-[#56AB92]">Data-Driven Decisions</span>
                </p>
                {/* Botón */}
                <button className="bg-[#56AB92] hover:bg-[#FAFAFA] text-[#FAFAFA] hover:text-[#56AB92] border-2 border-transparent hover:border-[#56AB92] font-medium px-4 py-2 rounded-lg flex items-center gap-1 transition">
                    View details →
                </button>
            </div>
        </div>
    );
};

export default Banner;
