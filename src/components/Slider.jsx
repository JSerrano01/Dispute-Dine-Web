import React from "react";

// Lista original comentada (se mantiene por referencia)
/*
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
*/

// Nueva lista con imágenes locales de partners
const localPartners = [
    {
        name: "Dispute Dine",
        logo: "src/assets/img/partners/DD_logo.png" // Asegúrate de tener esta imagen en public/images/partners/
    },
    {
        name: "Dollar Cafe",
        logo: "src/assets/img/partners/partner1.png"
    },
    {
        name: "Dispute Dine",
        logo: "src/assets/img/partners/DD_logo.png" // Asegúrate de tener esta imagen en public/images/partners/
    },
    {
        name: "Dollar Cafe",
        logo: "src/assets/img/partners/partner1.png"
    },
    {
        name: "Dispute Dine",
        logo: "src/assets/img/partners/DD_logo.png" // Asegúrate de tener esta imagen en public/images/partners/
    },
    {
        name: "Dollar Cafe",
        logo: "src/assets/img/partners/partner1.png"
    },
    {
        name: "Dispute Dine",
        logo: "src/assets/img/partners/DD_logo.png" // Asegúrate de tener esta imagen en public/images/partners/
    },
    {
        name: "Dollar Cafe",
        logo: "src/assets/img/partners/partner1.png"
    },
    {
        name: "Dispute Dine",
        logo: "src/assets/img/partners/DD_logo.png" // Asegúrate de tener esta imagen en public/images/partners/
    },
    {
        name: "Dollar Cafe",
        logo: "src/assets/img/partners/partner1.png"
    },
    // Agrega más partners según necesites
];

const LogoSlider = () => {
    return (
        <div className="w-full bg-[#FAFAFA] py-6 overflow-hidden">
            {/* Texto centrado y con diseño sutil */}
            <h1 className="text-center !text-2xl !font-normal !text-gray-500 !mb-10">OUR PARTNERS</h1>

            <div className="relative flex overflow-hidden w-full">
                {/* Contenedor que se mueve infinitamente */}
                <div className="flex min-w-max animate-marquee hover:animate-paused">
                    {/* Duplicamos el array para un efecto continuo */}
                    {[...localPartners, ...localPartners].map((partner, index) => (
                        <div key={`${partner.name}-${index}`} className="flex justify-center px-4">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="w-16 h-16 md:w-24 md:h-24 object-contain transition-all duration-300"
                                loading="lazy"
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