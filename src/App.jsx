import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import DashboardPage from "./pages/DashboardPage";
import SuccessStories from "./pages/SuccessStories";
import SuccessStoryDetail from "./pages/SuccessStoryDetail";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import ProductFeatures from "./pages/ProductFeatures";
import DisputeManager from "./pages/DisputeManager";
import PromotionManager from "./pages/PromotionManager";
import DowntimeController from "./pages/DowntimeController";
import ReviewsRatings from "./pages/ReviewsRatings";
import Finance from "./pages/Finance";
import AnalyticsInsigths from "./pages/AnalyticsInsights";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy"; 
import NotFound from "./pages/NotFound"; // Importa un componente NotFound

const App = () => {
  return (
    <Router>
      <div className="relative w-full min-h-screen flex flex-col overflow-x-hidden bg-black">
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/success-stories/:id" element={<SuccessStoryDetail />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/product-features" element={<ProductFeatures />} />
          <Route path="/dispute-manager" element={<DisputeManager />} />
          <Route path="/promotion-manager" element={<PromotionManager />} />
          {/* <Route path="/downtime-controller" element={<DowntimeController />} />
          <Route path="/reviews-ratings" element={<ReviewsRatings />} /> */}
          <Route path="/finance" element={<Finance />} />
          <Route path="/analytics-insights" element={<AnalyticsInsigths />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* Ruta para manejar todas las demás rutas no definidas */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;