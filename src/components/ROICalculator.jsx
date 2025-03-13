import React from "react";

const ROICalculator = () => {
    return (
        <div className="p-4">
            <div className="flex justify-center">
                <div className="bg-[#56AB92] p-8 rounded-2xl text-white text-center max-w-5xl w-full">
                    <h2 className="text-2xl font-bold">
                        See How Much You Can Save with Dispute Manager
                    </h2>
                    <p className="text-sm mt-2 mb-6">
                        Quickly fix disputes and save big. Enter your details below to get started.
                    </p>

                    {/* Responsive Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Input 1 */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold">Number of Stores</label>
                            <input
                                type="number"
                                placeholder="e.g 10"
                                className="mt-1 w-full p-2 border rounded-md text-black bg-white focus:ring-0 focus:outline-none focus:border-transparent"
                                min="0"
                            />
                        </div>

                        {/* Input 2 */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold">How Many Brands Do You Run?</label>
                            <input
                                type="number"
                                placeholder="e.g 3"
                                className="mt-1 w-full p-2 border rounded-md text-black bg-white focus:ring-0 focus:outline-none focus:border-transparent"
                                min="0"
                            />
                        </div>

                        {/* Input 3 */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold">Monthly Revenue Per Store</label>
                            <input
                                type="number"
                                placeholder="e.g 50000"
                                className="mt-1 w-full p-2 border rounded-md text-black bg-white focus:ring-0 focus:outline-none focus:border-transparent"
                                min="0"
                            />
                        </div>

                        {/* Botón */}
                        <div className="flex items-end">
                            <button className="w-full bg-[#99E2B4] text-[#FAFAFA] font-semibold py-[10px] px-6 rounded-lg hover:bg-gray-100 hover:text-[#99E2B4] transition-colors duration-500">
                                Calculate My ROI
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ROICalculator;
