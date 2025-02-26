import lastMonitoringData from "../data/lastMonitoringData.json";
import { motion } from "framer-motion";

/**
 * Componente de monitoreo general.
 *
 * Este componente muestra un listado de los últimos servicios monitoreados,
 * incluyendo detalles como el tipo de servicio, proveedor, fechas y estado.
 * También permite acceder a más información sobre entregas y recibos.
 */
export const GeneralMonitoringComponent = () => {
  /**
   * Obtiene el color de fondo asociado a un estado específico.

   */
  const getColorByText = (status) => {
    switch (status) {
      case "En Progreso":
        return "#5cb85c"; // Verde
      case "En Pausa":
        return "#f0ad4e"; // Amarillo
      case "Con Problemas":
        return "#f0ad4e"; // Amarillo
      case "Cancelada":
        return "#d9534f"; // Rojo
    }
  };

  return (
    <div className="general-monitoring-container">
      {/* Encabezado con títulos de las columnas */}
      <div className="general-monitoring-top-bar">
        <p>Tipo</p>
        <p>Proveedora</p>
        <p>Información Insumos</p>
        <p>Fecha de Inicio</p>
        <p>Estado</p>
        <p>Fecha de Finalización</p>
      </div>

      {/* Listado de servicios monitoreados */}
      <div className="general-monitoring-last-services">
        {lastMonitoringData.map((info) => (
          <motion.div
            className="general-monitoring-last-services-item"
            key={info.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: info.id * 0.25 }} // Animación escalonada por id (es decir por elemento)
          >
            <div>
              <p>{info.type}</p>
            </div>
            <div>
              <p>{info.supplier}</p>
            </div>
            <div>
              <p className="ver-insumos">Ver Información</p>
            </div>
            <div>
              <p>{info.startDate}</p>
            </div>
            {/* Estado con color de fondo dinámico */}
            <div style={{ backgroundColor: getColorByText(info.status) }}>
              <p>{info.status}</p>
            </div>
            <div>
              <p>{info.finalDate}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Sección inferior con botón de acceso a más información */}
      <div className="general-monitoring-bottom-bar">
        <div>
          <p>Más Información Sobre Las Entregas Y Recibos &rarr;</p>
        </div>
        <div>
          <button className="go-to-button">Ir a Seguimiento</button>
        </div>
      </div>
    </div>
  );
};

export default GeneralMonitoringComponent;
