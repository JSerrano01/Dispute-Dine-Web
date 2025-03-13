import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const DemoForm = () => {
    return (
        <div className="relative flex flex-col lg:flex-row items-center justify-between bg-black text-white max-w-8xl mx-auto !rounded-xs shadow-lg before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-gradient-to-r before:from-black before:via-white before:to-black">
            {/* Video Section */}
            <div className="relative max-w-fit max-h-fit lg:w-1/2 mt-17">
                <img
                    src="https://picsum.photos/1280/720"
                    alt="Video Thumbnail"
                    className="w-full h-auto rounded-lg"
                />
                <TestimonialSlider />
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-1/2 p-3">
                <h2 className="text-2xl font-bold mb-4">
                    Book Your Live Demo & Begin Your Journey to Revenue Recovery Now
                </h2>
                <form className="space-y-6">
                    {/* Nombre y Apellido */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-2 text-sm font-medium">First name*</label>
                            <input
                                type="text"
                                className="w-full p-2 bg-[#FAFAFA] text-black rounded-xl border border-gray-700 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium">Last name*</label>
                            <input
                                type="text"
                                className="w-full p-2 bg-[#FAFAFA] text-black rounded-xl border border-gray-700 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-2 text-sm font-medium">Email*</label>
                        <input
                            type="email"
                            className="w-full p-2 bg-[#FAFAFA] text-black rounded-xl border border-gray-700 focus:border-blue-500"
                        />
                    </div>

                    {/* Teléfono */}
                    <div>
                        <label className="block mb-2 text-sm font-medium">Phone number*</label>
                        <input
                            type="text"
                            className="w-full p-2 bg-[#FAFAFA] text-black rounded-xl border border-gray-700 focus:border-blue-500"
                        />
                    </div>

                    {/* Empresa */}
                    <div>
                        <label className="block mb-2 text-sm font-medium">Company name</label>
                        <input
                            type="text"
                            className="w-full p-2 bg-[#FAFAFA] text-black rounded-xl border border-gray-700 focus:border-blue-500"
                        />
                    </div>

                    {/* Botón */}
                    <button
                        type="submit"
                        className="w-30 p-2 bg-[#56AB92] !rounded-2xl text-[#FAFAFA] text-sm font-semibold hover:bg-[#FAFAFA] hover:text-[#56AB92] transition-colors duration-500"
                    >
                        Book demo
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DemoForm;
