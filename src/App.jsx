import { useState } from "react";
import Navbar from "./components/Navbar"; // Importa el Navbar
import Hero from "./components/Hero";
import StatsCard from "./components/StatsCard";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <Navbar /> {/* Agrega el Navbar aquí */}

//       <h1 className="text-3xl font-bold underline text-black">
//         Hello world!
//       </h1>
//     </div>
//   );
// }

// export default App;

// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-22">
//       <div className="container mx-auto flex justify-between items-center h-full px-40">

//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <img src="/img/logoNavbar.png" alt="Logo" className="h-32 w-auto" />
//         </div>

//         {/* Links */}
//         <ul className="flex items-center space-x-10 font-medium text-base">
//           <li className="relative group">
//             <a href="#" className="text-black transition-colors duration-300 hover:text-gray-700">
//               Product Features ▾
//             </a>
//           </li>
//           <li>
//             <a href="#" className="text-black transition-colors duration-300 hover:text-gray-700">About Us</a>
//           </li>
//           <li>
//             <a href="#" className="text-black transition-colors duration-300 hover:text-gray-700">Login</a>
//           </li>
//           <li>
//             <a href="#" className="text-black transition-colors duration-300 hover:text-gray-700">Success Stories</a>
//           </li>
//           <li>
//             <a href="#" className="text-black transition-colors duration-300 hover:text-gray-700">Blogs</a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="bg-[#78C6A3] text-white text-base px-6 py-2 rounded-md 
//                                        font-medium hover:bg-[#56AB92] transition-colors duration-300 
//                                        flex items-center justify-center"
//             >
//               Book Demo
//             </a>
//           </li>
//         </ul>

//       </div>
//     </nav>
//   );
// };

// const Hero = () => {
//   return (
//     <section className="h-screen bg-gradient-to-r from-blue-900 to-red-700 flex flex-col items-center justify-center text-white text-center p-8">
//       <span className="bg-gray-800 text-sm px-4 py-1 rounded-full">#1 AI Restaurant Operations Automation Platform</span>
//       <h1 className="text-5xl font-bold mt-4">Automate third-party promotions in <span className="text-blue-300">minutes.</span></h1>
//       <p className="mt-4 text-lg max-w-2xl">
//         Automate your disputes, reviews, finances, promotions, and downtime across DoorDash, UberEats, Grubhub, and more.
//       </p>
//       <button className="mt-6 bg-blue-500 px-6 py-3 rounded text-white font-semibold">Book a Demo →</button>
//     </section>
//   );
// };

// const StatsCard = ({ title, amount, description, buttonLabel }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md w-64 text-center">
//       <h3 className="text-gray-600 text-sm font-semibold">{title}</h3>
//       <p className="text-2xl font-bold">{amount}</p>
//       <p className="text-gray-500 text-sm">{description}</p>
//       {buttonLabel && <button className="mt-2 bg-orange-500 px-3 py-1 text-white rounded">{buttonLabel}</button>}
//     </div>
//   );
// };

const Dashboard = () => {
  return (
    <div className="flex space-x-4 justify-center p-8">
      <StatsCard title="Dispute Manager" amount="$84,000" description="Disputed orders: 8,700" buttonLabel="Dispute" />
      <StatsCard title="Reviews and Ratings" amount="6,433" description="Unanswered reviews" buttonLabel="Auto reply" />
      <StatsCard title="Finance" amount="$-8,011,191" description="Total deductions" />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Dashboard />
    </div>
  );
};

export default App;
