import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import principalSuppliersData from "../data/principalSuppliersData.json";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

// Componente principal de proveedores
export const SuppliersComponent = () => {
  // Estado para almacenar el proveedor seleccionado
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const menuRef = useRef(null);

  // Efecto para manejar el cierre del menú cuando se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSelectedSupplier(null);
      }
    };

    if (selectedSupplier) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedSupplier]);

  // Extrae los datos de uso del proveedor seleccionado para la gráfica
  const monthInfo = selectedSupplier
    ? selectedSupplier.usageData.map((entry) => entry.month)
    : [];
  const usageInfo = selectedSupplier
    ? selectedSupplier.usageData.map((entry) => entry.usage)
    : [];

  return (
    <>
      {/* Contenedor de proveedores */}
      <div className="suppliers-container">
        {principalSuppliersData.map((item) => (
          <motion.div
            key={item.id}
            className="suppliers-container-item"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 2, delay: item.id * 0.25 }}
          >
            {/* Imagen del proveedor */}
            <div className="suppliers-container-item-image">
              <img
                src={item.img}
                onClick={() => setSelectedSupplier(item)}
                alt="imagen del proveedor - click para abrir"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Menú emergente con detalles del proveedor seleccionado */}
      <AnimatePresence>
        {selectedSupplier && (
          <motion.div
            className="menu-container"
            key={selectedSupplier.id} // Clave para reiniciar la animación
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              ref={menuRef}
              className="menu"
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.2 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="logo-email">
                <div className="image">
                  <p className="logo-email-advise">
                    Clic fuera de este recuadro para salir
                  </p>
                  <h2 className="image-name">{selectedSupplier.name}</h2>
                </div>
                <div className="image-link">
                  <img src={selectedSupplier.img} alt="" />
                </div>
                <div className="text">
                  <p className="principal-text">Correo Electrónico:</p>
                  <p className="secondary-text">{selectedSupplier.email}</p>
                  <p className="principal-text">Web:</p>
                  <p className="secondary-text">
                    <a href={selectedSupplier.web} target="_blank">
                      {selectedSupplier.web}
                    </a>
                  </p>
                  <p className="principal-text">Tipo de Servicio:</p>
                  <p className="secondary-text">
                    {selectedSupplier.serviceType}
                  </p>
                  {/* Área para el gráfico de uso de servicios */}
                  <div className="area-graph">
                    <Line
                      data={{
                        labels: monthInfo,
                        datasets: [
                          {
                            label: "Contrataciones",
                            data: usageInfo, // Datos del proveedor seleccionado
                            borderColor: "rgb(53, 162, 235)",
                            backgroundColor: "rgba(53, 162, 235, 0.5)",
                            fill: true,
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        plugins: {
                          legend: {
                            position: "top",
                          },
                          title: {
                            display: true,
                            text: "Uso de Servicios Por Mes",
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SuppliersComponent;
