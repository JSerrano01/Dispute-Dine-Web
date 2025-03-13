import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const caseStudies = [
    {
        id: 1,
        company: "mcdonalds.com",
        title: "McDonald's Franchisee Saves $40K in 90 Days with Voosh Automation",
        stats: [{ value: "$40K", label: "Saved in 90 days" }, { value: "500+", label: "Manual hours saved" }],
        buttonText: "Read this story →",
    },
    {
        id: 2,
        company: "grouchos.com",
        title: "🚨 Why would you NOT automate it?",
        author: "Deric Rosenbaum, President of Groucho's Deli",
        description: "Shares about Voosh's automated dispute resolution.",
        buttonText: "Read this story →",
    },
    {
        id: 3,
        company: "plntburger.com",
        title: "Christopher Treloar, CEO of PLNT Burger, shares how Voosh transformed their operations and saved them thousands! 🏆",
        author: "Christopher Treloar",
        description: "Reveals how Voosh saved them thousands.",
        buttonText: "Read this story →",
    },
    {
        id: 4,
        company: "google.com",
        title: "💥 How a Top Bay Area Restaurant Chain Saved Over $500k in a Year 🤯",
        stats: [{ value: "$500k+", label: "Saved in a Year" }],
        buttonText: "Read this story →",
    },
    {
        id: 5,
        company: "disney.com",
        title: "⚡ Breaking News: Voosh Achieves Significant Financial Recovery for DIG! 💰",
        stats: [{ value: "4,000", label: "Disputed orders appealed successfully" }, { value: "300 Hrs", label: "Work saved" }],
        buttonText: "Read this story →",
    },
    {
        id: 6,
        company: "facebook.com",
        title: "🤯 Did you know a global food giant is projected to save $340,000 in just 30 days?",
        stats: [{ value: "$340,000", label: "Projected savings in 30 days" }, { value: "20x", label: "ROI per store" }],
        buttonText: "Read this story →",
    },
];

const CaseStudies = () => {
    return (
        <div className="bg-[#FAFAFA] py-10 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-black">Voosh Verified: Case Studies</h2>
                    <a href="#" className="!text-[#56AB92] !font-medium hover:underline px-20 scale-130">
                        View all →
                    </a>
                </div>
                <p className="text-gray-600 mb-6">
                    From Ghost Kitchens to Multi-Unit Restaurants: Hear How Voosh is Turning 3rd Party Marketplace Data into Dollars.
                </p>

                {/* Swiper Carousel */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1.2}
                        loop={true}
                        breakpoints={{
                            640: { slidesPerView: 1.5 },
                            768: { slidesPerView: 2.2 },
                            1024: { slidesPerView: 3 },
                        }}
                        navigation={{
                            prevEl: ".swiper-button-prev",
                            nextEl: ".swiper-button-next",
                        }}
                        pagination={{
                            clickable: true,
                            el: ".custom-pagination",
                        }}
                        className="pb-10"
                    >
                        {caseStudies.map((study) => (
                            <SwiperSlide key={study.id} className="h-auto p-3">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                                    {/* Image */}
                                    <img
                                        src={`https://logo.clearbit.com/${study.company}`}
                                        alt={study.title}
                                        className="w-fit h-fit self-center object-contain bg-gray-100 p-4"
                                    />

                                    {/* Content */}
                                    <div className="p-4 flex-1 flex flex-col">
                                        <h3 className="font-semibold !text-lg text-black">{study.title}</h3>

                                        {/* Stats or Author */}
                                        {study.stats ? (
                                            <div className="flex gap-2 my-3">
                                                {study.stats.map((stat, index) => (
                                                    <div key={index} className="bg-gray-200 px-3 py-1 rounded-md text-sm font-medium text-gray-700">
                                                        <strong>{stat.value}</strong> <br /> {stat.label}
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="mt-3 bg-gray-200 px-3 py-1 rounded-md text-sm text-gray-700">
                                                <strong>{study.author}</strong>
                                                <p>{study.description}</p>
                                            </div>
                                        )}

                                        {/* Button */}
                                        <button className="mt-auto border !border-[#56AB92] text-[#56AB92] hover:bg-[#56AB92] hover:text-[#FAFAFA] transition-olors duration-500 px-4 py-2 !rounded-lg w-full">
                                            {study.buttonText}
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom navigation buttons */}
                    <button className="swiper-button-prev absolute top-1/2 !left-[-60px] transform -translate-y-1/2 z-10 !text-[#99E2B4] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="!w-16 !h-16 scale-150 hover:text-[#56AB92] transition-olors duration-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                    <button className="swiper-button-next absolute top-1/2 !right-[-40px] transform -translate-y-1/2 z-10 !text-[#99E2B4] ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="!w-16 !h-16 scale-150 hover:text-[#56AB92] transition-olors duration-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </button>

                    {/* Custom pagination */}
                    <div className="custom-pagination flex justify-center mt-4 space-x-2 !text-black !important">
                        {/* Los botones se generarán automáticamente por Swiper */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;
