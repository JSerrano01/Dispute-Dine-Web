// src/pages/SuccessStories.jsx
import React, { useState } from "react";
import SuccessStoriesData from "../data/SuccessStoriesData";
import SuccessStoryCard from "../components/SuccessStoryCard";
import Model3D from "../components/Model3D";

const SuccessStories = () => {
  const [showLatest, setShowLatest] = useState(false);

  // Ordenar historias por fecha (las más recientes primero)
  const sortedStories = SuccessStoriesData.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Filtrar historias para resaltar las más recientes
  const filteredStories = showLatest
    ? sortedStories.map((story, index) => ({
        ...story,
        isLatest: index < 3, // Marca las 3 más recientes
      }))
    : sortedStories;

  return (
    <div className="text-white min-h-screen">
      {/* Sección Hero con Modelo 3D */}
      <div className="relative w-full h-[60vh] flex items-center justify-center text-center px-4">
        {/* Modelo 3D */}
        <div className="absolute inset-0 z-0">
          <Model3D />
        </div>

        {/* Título superpuesto */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Success Stories</h1>
          <p className="text-lg md:text-xl text-gray-300">
            Discover How Restaurants Are Maximizing Their Potential.
          </p>
        </div>
      </div>

      {/* Sección de Historias de Éxito */}
      <section className="relative z-10 bg-white">
        <div className="container mx-auto px-4 py-12">
          {/* Filtro "Latest" alineado a la derecha */}
          <div className="flex justify-start mb-8 border-b border-gray-200 relative">
            <button
              onClick={() => setShowLatest(!showLatest)}
              className="px-6 py-2 font-medium text-[#56AB92] relative focus:outline-none hover:text-black"
            >
              Latest
              {/* Indicador visual (sombra o subrayado) */}
              {showLatest && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#56AB92]"></div>
              )}
            </button>
          </div>

          {/* Grid de historias */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <SuccessStoryCard
                key={story.id}
                id={story.id} // Pasamos el ID aquí
                title={story.title}
                description={story.description}
                image={story.image}
                link={story.link}
                isLatest={story.isLatest} // Pasa la prop isLatest
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;