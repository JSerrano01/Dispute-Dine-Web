import Navbar from "./components/Navbar";
import Hero1 from "./components/Hero1";
import Dashboard from "./components/Dashboard";
import Slider from "./components/Slider";
import DashboardContainer from "./components/DashboardContainer";

const Layout = ({ children }) => {
  return (
    <div className="relative max-w-screen-xl mx-auto px-6">
      {children}
    </div>
  );
};

const App = () => {
  return (
    <div className="relative w-full min-h-screen">
      <Navbar />

      {/* Fondo general */}
      <div className="absolute top-0 left-0 w-full h-full bg-black -z-10"></div>

      {/* Contenedor principal */}
      <Layout>
        <div className="relative flex flex-col items-center">
          <Hero1 />
        </div>
      </Layout>

      {/* Dashboard flotando sobre el Hero */}
      <div className="relative flex justify-center -mt-16 z-20 bg-[#FAFAFA]">
        <Layout>
          <Dashboard />
        </Layout>
      </div>

      {/* Slider abajo con el mismo ancho */}
      <div className="bg-[#FAFAFA]">
        <Layout>
          <Slider />
        </Layout>
      </div>

      <div className="bg-[#FAFAFA]">
        <Layout>
          <DashboardContainer />
        </Layout>
      </div>
    </div>
  );
};

export default App;
