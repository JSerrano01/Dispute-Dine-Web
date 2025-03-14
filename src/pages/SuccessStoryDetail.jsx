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
        <div className="min-h-screen min-w-screen bg-black text-white px-6 pt-32">
            <div className="!max-w-md mx-auto">
                <img src={story.image} alt={story.title} className="w-full h-64 object-cover rounded-md mb-4" />
                <h1 className="text-3xl font-bold">{story.title}</h1>
                <p className="text-gray-300 mt-4">{story.description}</p>
            </div>

            {/* Sección de historias recomendadas con fondo blanco */}
            <div>

      {/* Recomendaciones */}
                <RecommendedStories currentBlogId={id} />
    </div>
        </div>
    );
};

export default SuccessStoryDetail;
