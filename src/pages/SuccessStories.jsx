// src/pages/SuccessStories.jsx
import React from "react";
import SuccessStoriesData from "../data/SuccessStoriesData";
import SuccessStoryCard from "../components/SuccessStoryCard";
import Model3D from "../components/Model3D";

const SuccessStories = () => {
  return (
    <div className="text-white min-h-screen">
      {/* Sección Hero con Modelo 3D */}
      <div className="relative w-full h-[60vh] flex items-center justify-center text-center px-4">
        {/* Modelo 3D */}
        <div className="absolute inset-0 z-0"> {/* z-0 para enviar al fondo */}
          <Model3D />
        </div>

        {/* Título superpuesto */}
        <div className="relative z-10"> {/* z-10 para que esté sobre el modelo */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Success Stories</h1>
          <p className="text-lg md:text-xl text-gray-300">
            Discover How Restaurants Are Maximizing Their Potential.
          </p>
        </div>
      </div>

      {/* Sección de Historias de Éxito */}
      <section className="relative z-10 bg-white"> {/* Fondo blanco para toda la sección */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SuccessStoriesData.map((story) => (
              <SuccessStoryCard
                key={story.id}
                title={story.title}
                description={story.description}
                image={story.image}
                link={story.link}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;