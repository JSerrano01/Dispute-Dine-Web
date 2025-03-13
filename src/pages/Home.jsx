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

const Home = () => {
    return (
        <>
            <div className="relative flex flex-col items-center">
                <Hero />
            </div>
            <div className="relative flex justify-center -mt-10 sm:-mt-16 z-20 bg-[#FAFAFA]">
                <Dashboard />
            </div>
            <div className="bg-[#FAFAFA]"><Slider /></div>
            <div className="bg-[#FAFAFA]"><DashboardContainer /></div>
            <div className="bg-[#FAFAFA]"><DashboardContainerLow /></div>
            <div className="bg-[#FAFAFA]"><Banner /></div>
            <div className="bg-[#FAFAFA]"><CaseStudies /></div>
            <div className="bg-[#FAFAFA]"><ROICalculator /></div>
            <div className="bg-[#FAFAFA]"><PressSlider /></div>
            <div className="bg-black py-20">
                <LiveDemoForm />
            </div>
        </>
    );
};

export default Home;
