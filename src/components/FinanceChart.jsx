import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const data = [
  { name: "Error charges", value: 7307, color: "#3b82f6" }, // Azul fuerte
  { name: "Other deductions", value: 5000, color: "#60a5fa" }, // Azul más claro
  { name: "Miscellaneous", value: 8000, color: "#d1d5db" }, // Gris claro
  { name: "Uncategorized", value: 7000, color: "#9ca3af" }, // Gris oscuro
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white text-black p-2 rounded-lg shadow-md border border-gray-300 text-xs">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ background: payload[0].color }}></span>
          {payload[0].name}: ${payload[0].value.toLocaleString()}
        </span>
      </div>
    );
  }
  return null;
};

const FinanceChart = () => {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex justify-center items-center"
    >
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={110}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} style={{ zIndex: 1 }} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>

      {/* Texto central */}
      <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-gray-500 text-sm font-semibold">Total deductions:</p>
        <p className="text-black text-xl font-bold">
          - $<CountUp end={8011191} duration={4} separator="," />
        </p>
      </div>
    </motion.div>
  );
};

export default FinanceChart;
