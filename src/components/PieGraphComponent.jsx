// DOCUMENTAR MEJOR, REVISAR PEQUEÑAS COSAS QUE NO SE ENTIENDAN

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { motion } from "motion/react";
import inventoryData from "../data/inventoryData.json";

// Función para crear el gradiente

export const PieGraphComponent = () => {
  const dataLabels = inventoryData.map((item) => item.product);
  const dataValues = inventoryData.map((item) => item.quantity);

  const backgroundColors = [
    "rgba(233,2,233,0.6)",
    "rgba(233,233,2,0.6)",
    "rgba(2,233,233,0.6)",
    "rgba(233,100,233,0.6)",
    "rgba(233,2,100,0.6)",
    "rgba(100,233,2,0.6)",
    "rgba(2,100,233,0.6)",
    "rgba(233,2,233,0.6)",
    "rgba(233,233,2,0.6)",
    "rgba(2,233,233,0.6)",
    "rgba(233,100,233,0.6)",
    "rgba(233,2,100,0.6)",
    "rgba(100,233,2,0.6)",
  ];
  return (
    <div className="pieGraph-container">
      <div
        className="top-bar"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "white", fontWeight: "bold" }}>INVENTARIO</p>
      </div>
      <motion.div
        className="pieGraph"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Pie
          data={{
            labels: dataLabels,
            datasets: [
              {
                label: "Cantidad total de productos de este tipo",
                data: dataValues,
                backgroundColor: backgroundColors,
                borderColor: "rgba(0,0,0,0.2)",
                borderWidth: 1,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { labels: { color: "black" } },
            },
          }}
        />
      </motion.div>
    </div>
  );
};

export default PieGraphComponent;
