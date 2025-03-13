import Hero from "../components/Hero";
import Dashboard from "../components/Dashboard";
import Slider from "../components/Slider";
import DashboardContainer from "../components/DashboardContainer";
import DashboardContainerLow from "../components/DashboardContainerLow";
import Banner from "../components/BannerSection";
import CaseStudies from "../components/CaseStudies";
import ROICalculator from "../components/ROICalculator";
import PressSlider from "../components/PressSlider";
import LiveDemoForm from "../components/LiveDemoForm";

const Layout = ({ children }) => {
    return (
        <div className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    );
};

const Home = () => {
    return (
        <>
            {/* Sección Hero */}
            <Layout>
                <div className="relative flex flex-col items-center">
                    <Hero />
                </div>
            </Layout>

            {/* Dashboard flotando sobre Hero */}
            <div className="relative flex justify-center -mt-10 sm:-mt-16 z-20 bg-[#FAFAFA]">
                <Layout>
                    <Dashboard />
                </Layout>
            </div>

            {/* Secciones con fondo blanco */}
            <div className="bg-[#FAFAFA]">
                <Layout><Slider /></Layout>
            </div>
            <div className="bg-[#FAFAFA]">
                <Layout><DashboardContainer /></Layout>
            </div>
            <div className="bg-[#FAFAFA]">
                <Layout><DashboardContainerLow /></Layout>
            </div>
            <div className="bg-[#FAFAFA]">
                <Layout><Banner /></Layout>
            </div>
            <div className="bg-[#FAFAFA]">
                <Layout><CaseStudies /></Layout>
            </div>
            <div className="bg-[#FAFAFA]">
                <Layout><ROICalculator /></Layout>
            </div>
            <div className="bg-[#FAFAFA]">
                <Layout><PressSlider /></Layout>
            </div>

            {/* Sección con fondo negro */}
            <div className="bg-black py-20">
                <Layout>
                    <div className="max-w-7xl mx-auto">
                        <LiveDemoForm />
                    </div>
                </Layout>
            </div>
        </>
    );
};

export default Home;
