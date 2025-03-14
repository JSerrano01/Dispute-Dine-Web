import React from "react";
import { Link } from "react-router-dom";
import SuccessStoriesData from "../data/SuccessStoriesData";

const getRandomStories = (excludeId, count = 3) => {
  const filteredStories = SuccessStoriesData.filter(story => story.id !== excludeId);
  const shuffled = filteredStories.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const RecommendedStories = ({ currentStoryId }) => {
  const recommendedStories = getRandomStories(currentStoryId);

  return (
    <div className="mt-16 bg-white p-6 rounded-lg ">
      <h2 className="!text-2xl font-bold !text-gray-900 mb-4">Catch up on other editions</h2>
      <div className="space-y-4">
        {recommendedStories.map(story => (
          <Link to={`/success-stories/${story.id}`} key={story.id} className="p-4 bg-gray-100 rounded-lg flex justify-between items-center hover:shadow-2xl transition-shadow duration-500">
            <div>
              <h3 className="!text-md font-semibold !text-black">{story.title}</h3>
              <p className="text-sm text-gray-600">Posted on: {story.date}</p>
            </div>
            <img src={story.image} alt={story.title} className="w-20 h-20 object-cover rounded-md" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommendedStories;
