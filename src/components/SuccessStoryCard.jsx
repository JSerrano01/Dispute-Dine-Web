import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessStoryCard = ({ id, title, description, image }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAFAFA] border border-gray-300 rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      {/* Imagen */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

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
            onClick={() => navigate(`/success-stories/${id}`)}
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

export default SuccessStoryCard;
