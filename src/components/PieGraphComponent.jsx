// Importaciones necesarias
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { motion } from "motion/react";
import inventoryData from "../data/inventoryData.json";

// Componente de la gráfica de pastel
export const PieGraphComponent = () => {
  // Extrae los nombres de los productos como etiquetas del gráfico
  const dataLabels = inventoryData.map((item) => item.product);

  // Extrae las cantidades de los productos para los valores del gráfico
  const dataValues = inventoryData.map((item) => item.quantity);

  // Definición de colores de fondo para cada segmento del gráfico
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
      {" "}
      {/* Contenedor principal */}
      {/* Barra superior con el título */}
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
      {/* Contenedor animado de la gráfica */}
      <motion.div
        className="pieGraph"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Gráfico de pastel */}
        <Pie
          data={{
            labels: dataLabels, // Etiquetas (productos)
            datasets: [
              {
                label: "Cantidad total de productos de este tipo",
                data: dataValues, // Valores (cantidades)
                backgroundColor: backgroundColors, // Colores definidos arriba
                borderColor: "rgba(0,0,0,0.2)", // Borde de cada segmento con opacidad
                borderWidth: 1, // Grosor del borde
              },
            ],
          }}
          options={{
            responsive: true, // Se adapta al tamaño del contenedor
            maintainAspectRatio: false, // Permite ajustar proporciones libremente
            plugins: {
              legend: { labels: { color: "black" } }, // Color negro para la leyenda
            },
          }}
        />
      </motion.div>
    </div>
  );
};

export default PieGraphComponent;
