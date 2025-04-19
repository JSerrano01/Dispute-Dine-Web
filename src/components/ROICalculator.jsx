import React, { useState } from "react";

const ROICalculator = () => {
    const [stores, setStores] = useState(null);
    const [brands, setBrands] = useState(null);
    const [revenue, setRevenue] = useState(null);
    const [savings, setSavings] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const calculateSavings = () => {
        const storesValue = stores || 0;
        const revenueValue = revenue || 0;

        const disputeRate = 0.02;
        const successRate = 0.7;

        const monthlyDisputes = storesValue * revenueValue * disputeRate;
        const monthlySavings = monthlyDisputes * successRate;
        const annualSavings = monthlySavings * 12;

        setSavings({
            monthly: Math.round(monthlySavings),
            annual: Math.round(annualSavings)
        });
        setShowResult(true);
    };

    const resetCalculator = () => {
        setStores(null);
        setBrands(null);
        setRevenue(null);
        setShowResult(false);
    };

    const handleChange = (setter) => (e) => {
        const value = e.target.value;
        setter(value === '' ? null : parseInt(value));
    };

    return (
        <div className="p-4">
            <div className="flex justify-center">
                <div className="bg-[#56AB92] p-8 rounded-2xl text-white text-center max-w-5xl w-full">
                    {!showResult ? (
                        <>
                            <h2 className="text-2xl font-bold">
                                See How Much You Can Save with Dispute Manager
                            </h2>
                            <p className="text-sm mt-2 mb-6">
                                Quickly fix disputes and save big. Enter your details below to get started.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="flex flex-col">
                                    <label className="text-sm font-semibold">Number of Stores</label>
                                    <input
                                        type="number"
                                        placeholder="e.g 10"
                                        className="mt-1 w-full p-2 border rounded-md text-black bg-white focus:ring-0 focus:outline-none focus:border-transparent"
                                        min="0"
                                        value={stores ?? ''}
                                        onChange={handleChange(setStores)}
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-sm font-semibold">How Many Brands Do You Run?</label>
                                    <input
                                        type="number"
                                        placeholder="e.g 3"
                                        className="mt-1 w-full p-2 border rounded-md text-black bg-white focus:ring-0 focus:outline-none focus:border-transparent"
                                        min="0"
                                        value={brands ?? ''}
                                        onChange={handleChange(setBrands)}
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-sm font-semibold">Monthly Revenue Per Store</label>
                                    <input
                                        type="number"
                                        placeholder="e.g 50000"
                                        className="mt-1 w-full p-2 border rounded-md text-black bg-white focus:ring-0 focus:outline-none focus:border-transparent"
                                        min="0"
                                        value={revenue ?? ''}
                                        onChange={handleChange(setRevenue)}
                                    />
                                </div>

                                <div className="flex items-end">
                                    <button
                                        className="w-full bg-[#99E2B4] text-[#FAFAFA] font-semibold py-[10px] px-6 !rounded-lg hover:bg-gray-100 hover:text-[#99E2B4] transition-colors duration-500"
                                        onClick={calculateSavings}
                                    >
                                        Calculate My ROI
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center">

                            <div className="bg-[#458872] p-6 rounded-lg w-full mb-6 animate-fade-in">
                                <p className="text-3xl font-semibold">
                                    With Dispute Dine, you could save approximately <span className="font-bold text-3xl">${savings.monthly.toLocaleString()}</span> every month.
                                </p>
                                <p className="text-3xl font-semibold mt-2">
                                    That's <span className="font-bold text-3xl">${savings.annual.toLocaleString()}</span> annually!
                                </p>
                            </div>

                            <button
                                className="bg-[#99E2B4] text-[#FAFAFA] font-semibold py-[10px] px-6 !rounded-lg hover:bg-gray-100 hover:text-[#99E2B4] transition-colors duration-500"
                                onClick={resetCalculator}
                            >
                                Recalculate
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ROICalculator;