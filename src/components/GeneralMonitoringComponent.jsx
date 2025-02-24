import lastMonitoringData from "../data/lastMonitoringData.json";
import { motion } from "framer-motion";

export const GeneralMonitoringComponent = () => {
  const getColorByText = (status) => {
    switch (status) {
      case "En Progreso":
        return "#5cb85c";
      case "En Pausa":
        return "#f0ad4e";
      case "Con Problemas":
        return "#f0ad4e";
      case "Cancelada":
        return "#d9534f";
    }
  };

  return (
    <div className="general-monitoring-container">
      <div className="general-monitoring-top-bar">
        <p>Tipo</p>
        <p>Proveedora</p>
        <p>Información Insumos</p>
        <p>Fecha de Inicio</p>
        <p>Estado</p>
        <p>Fecha de Finalización</p>
      </div>
      <div className="general-monitoring-last-services">
        {lastMonitoringData.map((info) => (
          <motion.div
            className="general-monitoring-last-services-item"
            key={info.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: info.id * 0.25 }}
          >
            <div>
              <p>{info.type}</p>
            </div>
            <div>
              <p>{info.supplier}</p>
            </div>
            <div>
              <p className="ver-insumos" style={{}}>
                Ver Información
              </p>
            </div>
            <div>
              <p>{info.startDate}</p>
            </div>
            <div style={{ backgroundColor: getColorByText(info.status) }}>
              <p>{info.status}</p>
            </div>
            <div>
              <p>{info.finalDate}</p>
            </div>
          </motion.div>
        ))}
      </div>
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
