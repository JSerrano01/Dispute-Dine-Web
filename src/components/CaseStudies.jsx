import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SuccessStoriesData from "../data/SuccessStoriesData"; // Importa los datos

const SuccessStoryCard = ({ id, title, description, image, link }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#FAFAFA] border border-gray-300 rounded-t-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="relative h-48">
                <img
                    src={image}
                    alt={title}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-full object-cover rounded-t-md"
                />
            </div>

            {/* Contenido de la tarjeta */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Título y descripción */}
                <div className="flex-grow">
                    <h2 className="text-lg text-black font-semibold mb-2">{title}</h2>
                    <p className="text-gray-500 mb-4">{description}</p>
                </div>

                {/* Botón alineado en la parte inferior */}
                <div className="mt-auto">
                    <button
                        onClick={() => navigate(link)} // Navega al enlace de la historia
                        className="inline-flex items-center !text-[#56AB92] font-medium border-2 border-[#56AB92] px-14 py-2 !rounded-md hover:bg-[#56AB92] hover:!text-white transition-colors duration-500"
                    >
                        Read this history
                        <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

const CaseStudies = () => {
    const navigate = useNavigate();

    // Limitar a 8 historias
    const limitedStories = SuccessStoriesData.slice(0, 8);

    return (
        <div className="bg-[#FAFAFA] py-10 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-black">Dispute Dine: Success Stories</h2>
                    <button
                        onClick={() => navigate("/success-stories")} // Redirige a la página de Success Stories
                        className="!text-[#56AB92] !font-medium hover:underline px-20 scale-130"
                    >
                        View all →
                    </button>
                </div>
                <p className="text-gray-600 mb-6">
                    Discover How Restaurants Are Maximizing Their Potential with Dine.
                </p>

                {/* Swiper Carousel */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1} // 1 slide por vista en pantallas pequeñas
                        loop={true}
                        breakpoints={{
                            // Pantallas pequeñas (menos de 640px): 1 slide
                            640: { slidesPerView: 1 }, // 1 slide en pantallas pequeñas
                            768: { slidesPerView: 2 }, // 2 slides en tablets
                            1024: { slidesPerView: 3 }, // 3 slides en pantallas grandes
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
                        {limitedStories.map((story) => (
                            <SwiperSlide key={story.id} className="h-auto p-3">
                                <SuccessStoryCard
                                    id={story.id}
                                    title={story.title}
                                    description={story.description}
                                    image={story.image}
                                    link={story.link}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom navigation buttons */}
                    <button className="swiper-button-prev absolute top-1/2 !left-[-60px] transform -translate-y-1/2 z-10 !text-[#99E2B4] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="!w-16 !h-16 scale-150 hover:text-[#56AB92] transition-colors duration-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                    <button className="swiper-button-next absolute top-1/2 !right-[-40px] transform -translate-y-1/2 z-10 !text-[#99E2B4]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="!w-16 !h-16 scale-150 hover:text-[#56AB92] transition-colors duration-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
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