import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import DashboardPage from "./pages/DashboardPage";
import SuccessStories from "./pages/SuccessStories";
import SuccessStoryDetail from "./pages/SuccessStoryDetail";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail"; // Importar la nueva página

const App = () => {
  return (
    <Router>
      <div className="relative w-full min-h-screen flex flex-col overflow-x-hidden bg-black">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/success-stories/:id" element={<SuccessStoryDetail />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
