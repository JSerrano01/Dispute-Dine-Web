import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <Link 
        to="/" 
        className="bg-[#56AB92] hover:bg-[#3a8d6e] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;