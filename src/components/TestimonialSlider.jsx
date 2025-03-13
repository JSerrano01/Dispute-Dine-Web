import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        image: "https://logo.clearbit.com/google.com",
        text: "Voosh enhanced our operational precision, boosting efficiency across all departments. Highly recommended!"
    },
    {
        image: "https://logo.clearbit.com/microsoft.com",
        text: "The analytics and insights from Voosh have transformed the way we optimize our workflows. A game-changer!"
    },
    {
        image: "https://logo.clearbit.com/amazon.com",
        text: "With Voosh, we significantly improved dispute resolutions, resulting in increased customer satisfaction."
    },
    {
        image: "https://logo.clearbit.com/nike.com",
        text: "Voosh streamlined our operational workflow, making us more agile and effective. It's a must-have tool!"
    },
    {
        image: "https://logo.clearbit.com/starbucks.com",
        text: "Voosh allowed us to refine our financial strategies, leading to better efficiency and greater revenue retention."
    }
];

const TestimonialSlider = () => {
    return (
        <div className="py-10 px-6">
            <div className="w-max-item">
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
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="h-auto p-1 flex justify-center">
                                <div className="border-2 border-[#FAFAFA] bg-[#1a1a1a] text-white !rounded-lg shadow-md p-6 w-[480px] h-[120px] flex items-center gap-6">
                                    <img src={testimonial.image} alt="logo" className="w-16 h-16 rounded-full bg-white p-1" />
                                    <p className="text-sm">{testimonial.text}</p>
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
