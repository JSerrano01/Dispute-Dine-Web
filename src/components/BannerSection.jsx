import React from "react";

const Banner = () => {
    return (
        <div className="flex items-center justify-between bg-transparent p-8">
            {/* Texto */}
            <div className="flex items-center justify-between bg-white p-8 shadow-md rounded-lg w-full">
            <p className="text-lg font-semibold text-black">
                Unleash Your Restaurant's Potential with{" "}
                <span className="text-[#56AB92]">Data-Driven Decisions</span>
            </p>

            {/* Botón */}
                <button className="bg-[#56AB92] hover:bg-[#FAFAFA] text-[#FAFAFA] hover:text-[#56AB92] border-2 border-transparent hover:border-[#56AB92] font-medium px-4 py-2 !rounded-lg flex items-center gap-1 transition">
                    View details →
                </button>
            </div>
        </div>
    );
};

export default Banner;
