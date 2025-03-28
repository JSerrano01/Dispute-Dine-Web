import { useParams } from "react-router-dom";
import SuccessStoriesData from "../data/SuccessStoriesData";
import RecommendedStories from "../components/RecommendedStories";

const SuccessStoryDetail = () => {
    const { id } = useParams();
    const story = SuccessStoriesData.find(s => s.id === parseInt(id));

    if (!story) {
        return <div className="text-center text-red-500 mt-32">Story not found</div>;
    }

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Contenido principal (fondo negro) */}
            <div className="px-6 pt-20 pb-0">
                <div className="max-w-4xl mx-auto">
                    {/* Contenedor de imagen ajustada y centrada */}
                    <div className="mb-8 flex justify-center">
                        <div className="w-full max-w-2xl rounded-lg overflow-hidden">
                            <img 
                                src={story.image} 
                                alt={story.title} 
                                className="w-full h-auto max-h-80 object-contain"
                            />
                        </div>
                    </div>

                    {/* Encabezado */}
                    <header className="mb-8">
                        <span className="text-[#56AB92] text-sm">
                            {new Date(story.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                            })}
                        </span>
                        <h1 className="text-3xl font-bold mt-2 mb-4">{story.title}</h1>
                        <p className="text-lg text-gray-300">{story.description}</p>
                    </header>

                    {/* Contenido del artículo */}
                    <article className="prose prose-invert max-w-none">
                        {story.content?.map((section, index) => {
                            switch (section.type) {
                                case "paragraph":
                                    return <p key={index} className="text-gray-300 leading-relaxed mb-4">{section.text}</p>;
                                case "heading":
                                    return <h2 key={index} className="text-xl font-bold mt-8 mb-4 text-white">{section.text}</h2>;
                                case "quote":
                                    return (
                                        <blockquote key={index} className="border-l-4 border-[#56AB92] pl-4 italic text-gray-400 my-6 py-1">
                                            {section.text}
                                        </blockquote>
                                    );
                                case "list":
                                    return (
                                        <ul key={index} className="list-disc pl-5 space-y-2 my-4 text-gray-300">
                                            {section.items?.map((item, i) => (
                                                <li key={i} className="mb-1">{item}</li>
                                            ))}
                                        </ul>
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </article>
                </div>
            </div>

            {/* Sección de recomendaciones (fondo blanco) - Altura según contenido */}
            <div className="bg-white text-black px-6 py-5">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold mb-6">More Success Stories</h3>
                    <RecommendedStories currentStoryId={id} />
                </div>
            </div>
        </div>
    );
};

export default SuccessStoryDetail;