// src/pages/Blogs.jsx
import React, { useState } from "react";
import BlogsData from "../data/BlogsData";
import BlogsCard from "../components/BlogsCard";
import Model3D from "../components/Model3D";

const Blogs = () => {
  const [showLatest, setShowLatest] = useState(false);

  // Ordenar blogs por fecha (las más recientes primero)
  const sortedBlogs = BlogsData.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Filtrar blogs para resaltar los más recientes
  const filteredBlogs = showLatest
    ? sortedBlogs.map((blog, index) => ({
        ...blog,
        isLatest: index < 3, // Marca los 3 más recientes
      }))
    : sortedBlogs;

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
          <h1 className="!text-9xl md:text-6xl font-bold mb-4">Blogs</h1>
        </div>
      </div>

      {/* Sección de Blogs */}
      <section className="relative z-10 bg-white">
        <div className="container mx-auto px-4 py-12">
          {/* Filtro "Latest" alineado a la izquierda */}
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

          {/* Grid de blogs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <BlogsCard
                key={blog.id}
                id={blog.id} // Pasamos el ID aquí
                title={blog.title}
                description={blog.description}
                image={blog.image}
                link={blog.link}
                date={blog.date} // Asegúrate de pasar la fecha
                isLatest={blog.isLatest} // Pasa la prop isLatest
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;