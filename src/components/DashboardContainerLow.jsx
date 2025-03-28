import React from "react";
import { Star, Wallet } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import DashboardContainer from "./DashboardContainer";
import FinanceChart from "./FinanceChart"; // 📌 Ya está importado
import RatingGauge from "./RatingGauge"; // 📌 Importa el gráfico
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Importar useNavigate

const data = [
  { value: 10 }, { value: 30 }, { value: 20 }, { value: 50 }, { value: 45 }, { value: 70 }, { value: 100 }
];

const RatingsGraph = () => (
  <ResponsiveContainer width="100%" height={100}>
    <AreaChart data={data}>
      <Area type="monotone" dataKey="value" stroke="#FAFAFA" fillOpacity={0.3} fill="#FAFAFA" />
    </AreaChart>
  </ResponsiveContainer>
);

const DashboardContainerLower = () => {
  const navigate = useNavigate(); // Hook para navegación

  // Función para manejar la navegación
  const handleViewDetails = (title) => {
    const route = title.toLowerCase().replace(/\s+/g, "-"); // Convertir título a ruta
    navigate(`/${route}`); // Navegar a la ruta
  };

  return (
    <div className="flex flex-col sm:flex-row gap-6 p-6 bg-[#FAFAFA] min-h-item">
      {/* Ratings Card */}
      <div className="w-full sm:w-[45%] rounded-xl shadow-lg p-6 !bg-[#56AB92]">
        <div className="flex items-center gap-2 !text-[#FAFAFA] font-semibold">
          <Star className="w-5 h-5" />
          <span>REVIEWS AND RATINGS</span>
        </div>
        <h2 className="!text-[#FAFAFA] !text-3xl sm:!text-4xl !font-bold mt-2">Deliver a 5 Star Guest Experience</h2>
        <p className="mt-2 !text-[#FAFAFA] text-base sm:text-xl font-normal">
          Enhance your brand's reputation and customer experience across your third-party marketplaces from one unified dashboard.
        </p>
        <div className="flex gap-2 mt-4 font-medium flex-wrap">
          {["DOORDASH", "UBER EATS", "GRUBHUB", /*"GOOGLE", "YELP"*/].map((item, index) => (
            <motion.span
              key={item}
              className="bg-[#99E2B4] px-3 py-2 text-xs rounded-md !text-[#FAFAFA]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.2, // Animación rápida
                delay: index * 0.3, // Aparece en cascada (0.3s entre cada uno)
                ease: "easeOut",
              }}
            >
              {item}
            </motion.span>
          ))}
        </div>
        <div className="mt-6">
          <RatingGauge value={4.2} /> {/* 📌 Aquí agregamos el velocímetro */}
        </div>
        {/* <div className="mt-6 sm:mt-18 bottom-0">
          <motion.button
            className="border border-white px-4 py-2 !rounded-2xl !text-[#FAFAFA] flex items-center gap-2 hover:bg-white hover:!text-[#56AB92] transition-colors duration-500"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }} // Se ejecuta cada vez que entra un 20% en la vista
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
            onClick={() => handleViewDetails("REVIEWS AND RATINGS")} // Navegar a la ruta
          >
            View Details ➝
          </motion.button>
        </div> */}
      </div>

      {/* Finance Card */}
      <div className="w-full sm:w-[55%] bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-2 text-gray-500 font-semibold">
          <Wallet className="w-5 h-5" />
          <span>FINANCE AND RECONCILIATION</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mt-2">Simplify Your <span className="text-[#56AB92]">Restaurant's Finances</span></h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Instantly understand payout discrepancies and track every dollar across all delivery platforms.
        </p>

        {/* 📌 Aquí insertamos el gráfico en lugar del div con el total */}
        <div className="flex flex-col sm:flex-row gap-4 items-center mt-6">
          <FinanceChart /> {/* Gráfico circular */}
          <div className="w-full sm:w-auto">
            {["Delivery network fee", "Order processing fee", "Merchant commission", "Delivery network fee"].map((item, index) => (
              <div key={index} className="flex justify-between text-gray-700 text-sm py-1">
                <span>{item}</span>
                <span className="font-semibold">${[1326, 325, 41139, 1326][index]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-20">
          <motion.button
            className="border-1 border-[#99E2B4] px-4 py-2 !rounded-2xl !text-[#56AB92] flex items-center gap-2 hover:bg-[#56AB92] hover:!text-[#FAFAFA] transition-colors duration-500"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }} // Se ejecuta cada vez que entra un 20% en la vista
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
            onClick={() => handleViewDetails("FINANCE")} // Navegar a la ruta
          >
            View Details ➝
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default DashboardContainerLower;