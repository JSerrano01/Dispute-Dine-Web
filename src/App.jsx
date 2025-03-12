import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero1 from "./components/Hero1"
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="relative">
        {/* <Hero /> */}
        <Hero1 />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-gray-900"></div>
      </div>
      <Dashboard />
    </div>
  );
};

export default App;
