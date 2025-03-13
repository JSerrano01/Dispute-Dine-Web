import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const RatingGauge = ({ value = 4.2 }) => {
  // Ajustamos la distribución del arco
  const data = [
    { value: 3, color: "#d1d5db" },  // Gris claro (fondo)
    { value: 1, color: "#9ca3af" },  // Gris oscuro (progreso)
    { value: 4, color: "transparent" }, // Espacio vacío (para hacer medio arco)
  ];

  return (
    <div className="relative flex items-center justify-center">
      {/* Gráfico semicircular */}
      <PieChart width={280} height={130}>
        <Pie
          data={data}
          cx="50%"
          cy="100%"
          startAngle={180}
          endAngle={-180}  // Cambiamos a -180 para corregir el arco
          innerRadius={80}
          outerRadius={120}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>

      {/* Texto central */}
      <div className="absolute top-[85%] transform -translate-y-1/2 text-center">
        <p className="text-white text-4xl font-bold">{value}</p>
        <p className="text-white text-xs">AVERAGE RATING</p>
      </div>
    </div>
  );
};

export default RatingGauge;
