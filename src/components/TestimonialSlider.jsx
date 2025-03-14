import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import testimonialsData from "../data/testimonialsData"; // Importa los datos

const TestimonialSlider = () => {
    return (
        <div className="py-10 px-6">
            <div className="w-full max-w-7xl mx-auto">
                <div className="relative">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1} // ✅ SOLO UN TESTIMONIO A LA VEZ
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{
                            el: ".custom-pagination-testimonial",
                            clickable: true,
                            renderBullet: function (index, className) {
                                return `<span class="${className} custom-bullet"></span>`;
                            },
                        }}
                        className="pb-10"
                    >
                        {testimonialsData.map((testimonial) => (
                            <SwiperSlide key={testimonial.id} className="h-auto p-1 flex justify-center">
                                <div className="border-2 border-[#FAFAFA] bg-[#1a1a1a] text-white !rounded-lg shadow-md p-6 w-full lg:w-[480px] h-auto lg:h-[120px] flex flex-col lg:flex-row items-center gap-6">
                                    {/* Imagen */}
                                    <img src={testimonial.image} alt="logo" className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white p-1" />

                                    {/* Texto */}
                                    <p className="text-sm text-center lg:text-left">{testimonial.text}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom pagination */}
                    <div className="custom-pagination-testimonial flex justify-center mt-4 space-x-2"></div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;