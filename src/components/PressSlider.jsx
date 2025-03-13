import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const pressArticles = [
    {
        id: 1,
        logo: "https://logo.clearbit.com/google.com",
        title: "Voosh Offers Free 30-Day Trial of Its Revolutionary Restaurant Intelligence Platform",
        date: "25 October 2023",
        source: "EZ Newswire",
        link: "#"
    },
    {
        id: 2,
        logo: "https://logo.clearbit.com/microsoft.com",
        title: "Leveraging Viral Moments with Priyam Saraswat of Voosh.ai - Cali BBQ Media - Digital Content & Media",
        date: "02 October 2023",
        source: "Cali BBQ Media",
        link: "#"
    },
    {
        id: 3,
        logo: "https://logo.clearbit.com/forbes.com",
        title: "The Crucial Role of Dispute Management and Data Consolidation for Restaurants | QSR magazine",
        date: "27 September 2023",
        source: "QSR magazine",
        link: "#"
    },
    {
        id: 4,
        logo: "https://logo.clearbit.com/techcrunch.com",
        title: "Tech Tracker: Is social video the future of restaurant reviews? | Voosh now uses AI to respond to customer disputes",
        date: "19 September 2023",
        source: "Nation's Restaurant News",
        link: "#"
    },
    {
        id: 5,
        logo: "https://logo.clearbit.com/bloomberg.com",
        title: "Voosh Launches Dispute Manager: The Game-Changer for Restaurant Profit Protection",
        date: "29 August 2023",
        source: "AP News",
        link: "#"
    }
];

const PressSlider = () => {
    return (
        <div className="bg-[#FAFAFA] py-10 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-black">In the Press</h2>
                    <a href="#" className="!text-[#56AB92] !font-medium hover:underline px-20 scale-130">
                        View all →
                    </a>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 1.5 },
                            1024: { slidesPerView: 2 },
                            1280: { slidesPerView: 3 },
                        }}
                        navigation
                        pagination={{ clickable: true }}
                        className="pb-10"
                    >
                        {pressArticles.map((article) => (
                            <SwiperSlide key={article.id} className="h-auto p-1">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                                    <div className="flex items-center justify-center h-40 bg-gray-100">
                                        <img src={article.logo} alt="Logo" className="h-24" />
                                    </div>
                                    <div className="p-4 flex-1 flex flex-col">
                                        <h3 className="!font-semibold !text-lg text-black">{article.title}</h3>
                                        <p className="text-gray-600 mt-2">{article.date} • {article.source}</p>
                                        <a href={article.link} className="mt-auto !border-black !text-[#56AB92] hover:underline">
                                            Read more →
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default PressSlider;
