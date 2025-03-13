import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import DashboardPage from "./pages/DashboardPage";

const Layout = ({ children }) => {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

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
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
