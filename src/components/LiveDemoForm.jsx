import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const DemoForm = () => {
    return (
        <div className="relative flex flex-col lg:flex-row items-center justify-between bg-black text-white max-w-7xl mx-auto py-10 lg:py-20 rounded-lg shadow-lg overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-black after:via-white after:to-black">
            {/* Video Section */}
            <div className="relative w-full lg:w-1/2 px-6 lg:px-0">
                <img
                    src="https://picsum.photos/1280/720"
                    alt="Video Thumbnail"
                    className="w-full h-auto rounded-lg"
                />
                <TestimonialSlider />
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-1/2 px-6 lg:px-12">
                <h2 className="text-2xl font-bold mb-6">
                    Book Your Live Demo & Begin Your Journey to Revenue Recovery Now
                </h2>
                <form className="space-y-6">
                    {/* Nombre y Apellido */}
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="w-full lg:w-1/2">
                            <label className="block mb-2 text-sm font-medium">First name*</label>
                            <input
                                type="text"
                                className="w-full p-3 bg-[#FAFAFA] text-black rounded-xl border border-gray-700 focus:border-blue-500"
                                placeholder="Enter your first name"
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <label className="block mb-2 text-sm font-medium">Last name*</label>
                            <input
                                type="text"
                                className="w-full p-3 bg-[#FAFAFA] text-black rounded-xl border border-gray-700 focus:border-blue-500"
                                placeholder="Enter your last name"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-2 text-sm font-medium">Email*</label>
                        <input
                            type="email"
                            className="w-full p-3 bg-[#FAFAFA] text-black rounded-xl border border-gray-700 focus:border-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Teléfono */}
                    <div>
                        <label className="block mb-2 text-sm font-medium">Phone number*</label>
                        <input
                            type="text"
                            className="w-full p-3 bg-[#FAFAFA] text-black rounded-xl border border-gray-700 focus:border-blue-500"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    {/* Empresa */}
                    <div>
                        <label className="block mb-2 text-sm font-medium">Company name</label>
                        <input
                            type="text"
                            className="w-full p-3 bg-[#FAFAFA] text-black rounded-xl border border-gray-700 focus:border-blue-500"
                            placeholder="Enter your company name"
                        />
                    </div>

                    {/* Botón */}
                    <button
                        type="submit"
                        className="w-full lg:w-auto p-3 bg-[#56AB92] !rounded-2xl text-[#FAFAFA] text-sm font-semibold hover:bg-[#FAFAFA] hover:text-[#56AB92] transition-colors duration-500"
                    >
                        Book demo
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DemoForm;