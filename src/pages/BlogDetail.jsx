import { useParams } from "react-router-dom";
import BlogsData from "../data/BlogsData";

const BlogDetail = () => {
  const { id } = useParams();
  console.log("ID from URL:", id); // ✅ Verifica qué ID está recibiendo

  const blog = BlogsData.find((b) => b.id === parseInt(id, 10));

  console.log("Found blog:", blog); // ✅ Verifica si encuentra el blog correcto

  if (!blog) {
    return <div className="text-center text-red-500 mt-32">Blog not found</div>;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-md mb-4" />
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <p className="text-gray-500 mt-2">{blog.date}</p>
        <p className="mt-4 text-gray-700">{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
