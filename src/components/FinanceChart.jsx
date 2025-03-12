import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Error charges", value: 7307, color: "#3b82f6" },
  { name: "Other deductions", value: 15000, color: "#d1d5db" },
];

const FinanceChart = () => {
  return (
    <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
      <PieChart width={200} height={200}>
        <Pie data={data} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </motion.div>
  );
};

export default FinanceChart;
