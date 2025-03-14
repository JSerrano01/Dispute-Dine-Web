import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BlogsData from "../data/BlogsData"; // Importa los datos de blogs

const BlogsSlider = () => {
    const navigate = useNavigate();

    // Limitar a 8 blogs
    const limitedBlogs = BlogsData.slice(0, 8);

    return (
        <div className="bg-[#FAFAFA] py-10 px-6 relative">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-black">In the press</h2>
                    <button
                        onClick={() => navigate("/blogs")} // Redirige a la página de Blogs
                        className="!text-[#56AB92] !font-medium hover:underline px-20 scale-130"
                    >
                        View all →
                    </button>
                </div>

                {/* Flechas de navegación FUERA del Swiper */}
                <button className="swiper-button-prev absolute top-1/2 left-[-50px] transform -translate-y-1/2 z-20 !text-[#99E2B4]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 hover:text-[#56AB92] transition-colors duration-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>

                <button className="swiper-button-next absolute top-1/2 right-[-50px] transform -translate-y-1/2 z-20 !text-[#99E2B4]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 hover:text-[#56AB92] transition-colors duration-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>

                {/* Swiper Carousel */}
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1} // 1 slide por vista en pantallas pequeñas
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay cada 3 segundos
                    breakpoints={{
                        640: { slidesPerView: 1 }, // 1 slide en pantallas pequeñas
                        768: { slidesPerView: 2 }, // 2 slides en tablets
                        1024: { slidesPerView: 3 }, // 3 slides en pantallas grandes
                    }}
                    navigation={{ prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }}
                    pagination={{ el: ".custom-pagination-press", clickable: true }}
                    className="pb-10"
                >
                    {limitedBlogs.map((blog) => (
                        <SwiperSlide key={blog.id} className="h-auto p-1">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                                {/* Imagen */}
                                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />

                                {/* Contenido de la tarjeta */}
                                <div className="p-4 flex-1 flex flex-col">
                                    <h3 className="!font-semibold !text-lg text-black">{blog.title}</h3>
                                    <p className="text-gray-600 mt-2">{blog.description}</p>
                                    <p className="text-gray-400 text-sm mt-4">
                                        Posted on: <span className="text-gray-400">{blog.date}</span>
                                    </p>
                                    <button
                                        onClick={() => navigate(blog.link)}
                                        className="mt-auto !text-[#56AB92] !font-medium border-2 !border-[#56AB92] px-6 py-2 !rounded-md hover:bg-[#56AB92] hover:!text-white transition-colors duration-500"
                                    >
                                        Read more →
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Paginación personalizada */}
                <div className="custom-pagination-press mt-4"></div>
            </div>
        </div>
    );
};

export default BlogsSlider;