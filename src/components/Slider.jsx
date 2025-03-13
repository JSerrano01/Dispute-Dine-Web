import React from "react";

// Lista de dominios de marcas conocidas
const companies = [
    "google.com",
    "facebook.com",
    "microsoft.com",
    "netflix.com",
    "twitter.com",
    "apple.com",
    "amazon.com",
    "adobe.com",
    "tesla.com",
    "spotify.com",
    "paypal.com",
    "snapchat.com",
    "linkedin.com",
    "github.com",
    "airbnb.com",
];

// Genera URLs de logos usando Clearbit
const logos = companies.map((company) => `https://logo.clearbit.com/${company}`);

const LogoSlider = () => {
    return (
        <div className="w-full bg-[#FAFAFA] py-6 overflow-hidden">
            {/* Texto centrado y con diseño sutil */}
            <h1 className="text-center !text-2xl !font-normal !text-gray-500 !mb-10">OUR PARTNERS</h1>

            <div className="relative flex overflow-hidden w-full">
                {/* Contenedor que se mueve infinitamente */}
                <div className="flex min-w-max animate-marquee hover:animate-paused">
                    {/* Duplicamos el array para un efecto continuo */}
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex justify-center px-4">
                            <img
                                src={logo}
                                alt={`Logo ${index}`}
                                className="w-24 h-24 rounded-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Estilos para la animación */}
            <style>
                {`
                    @keyframes marquee {
                        from { transform: translateX(0); }
                        to { transform: translateX(-50%); }
                    }

                    .animate-marquee {
                        display: flex;
                        animation: marquee 20s linear infinite;
                    }

                    .hover\\:animate-paused:hover {
                        animation-play-state: paused;
                    }
                `}
            </style>
        </div>
    );
};

export default LogoSlider;
