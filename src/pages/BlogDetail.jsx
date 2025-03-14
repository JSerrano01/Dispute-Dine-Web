import { useParams } from "react-router-dom";
import BlogsData from "../data/BlogsData";
import RecommendedBlogs from "../components/RecommendedBlogs";

const BlogDetail = () => {
    const { id } = useParams();
    const blog = BlogsData.find(b => b.id === parseInt(id));

    if (!blog) {
        return <div className="text-center text-red-500 mt-32">Blog not found</div>;
    }

    return (
        <div className="min-h-screen min-w-screen bg-black text-white px-6 pt-32">
            <div className="!max-w-md mx-auto">
                <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-md mb-4" />
                <h1 className="text-3xl font-bold">{blog.title}</h1>
                <p className="text-gray-300 mt-4">{blog.description}</p>
            </div>

            {/* Sección de blogs recomendados */}
            <RecommendedBlogs currentBlogId={blog.id} />
        </div>
    );
};

export default BlogDetail;
