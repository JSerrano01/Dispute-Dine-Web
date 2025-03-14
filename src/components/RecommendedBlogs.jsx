import React from "react";
import { Link } from "react-router-dom";
import BlogsData from "../data/BlogsData";

const getRandomBlogs = (excludeId, count = 3) => {
  const filteredBlogs = BlogsData.filter(blog => blog.id !== excludeId);
  const shuffled = filteredBlogs.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const RecommendedBlogs = ({ currentBlogId }) => {
  const recommendedBlogs = getRandomBlogs(currentBlogId);

  return (
    <div className="mt-16 bg-white p-6 rounded-lg">
      <h2 className="!text-2xl font-bold !text-gray-900 mb-4">You may also like</h2>
      <div className="space-y-4">
        {recommendedBlogs.map(blog => (
          <Link
            to={`/blogs/${blog.id}`}
            key={blog.id}
            className="p-4 bg-gray-100 rounded-lg flex justify-between items-center hover:shadow-2xl transition-shadow duration-500"
          >
            <div>
              <h3 className="!text-md font-semibold !text-black">{blog.title}</h3>
              <p className="text-sm text-gray-600">Posted on: {blog.date}</p>
            </div>
            <img src={blog.image} alt={blog.title} className="w-20 h-20 object-cover rounded-md" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommendedBlogs;
