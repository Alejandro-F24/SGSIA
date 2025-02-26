import { motion } from "framer-motion";
import lastNotiData from "../data/lastNotiData.json";

/**
 * Componente de Últimas Notificaciones.
 *
 * Este componente muestra una lista de notificaciones recientes con animaciones
 * para mejorar la experiencia visual. Utiliza Framer Motion para los efectos
 * de escala y desvanecimiento.
 */
export const LastNotificationsComponent = () => {
  return (
    <div className="last-notification">
      {/* Barra superior (puede usarse para estilo o separación) */}
      <div className="top-bar"></div>

      {/* Título de la sección con animación de escala */}
      <div className="last-notification-title">
        <motion.h3
          initial={{ scale: 0 }} // Inicia con tamaño 0
          animate={{ scale: 1 }} // Se expande a tamaño normal
          transition={{ duration: 0.5 }} // La animación dura 0.5 segundos
        >
          Notificaciones Principales
        </motion.h3>
      </div>

      {/* Lista de notificaciones */}
      <ul>
        {lastNotiData.map((notification) => (
          <motion.li
            key={notification.id}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: notification.id * 0.25 }} // Animaciones escalonadas
          >
            {/* Contenido de la notificación */}
            <span className="text-list">
              <img src={notification.img} alt="imagen notificación" />{" "}
              {/* Imagen de la notificación */}
              {notification.message} {/* Mensaje de la notificación */}
            </span>
            <span className="time-list-text">{notification.time}</span>{" "}
            {/* Hora de la notificación */}
          </motion.li>
        ))}
      </ul>

      {/* Botón para ver más notificaciones */}
      <div className="notification-button">
        <button className="go-to-button">Ver Notificaciones</button>
      </div>
    </div>
  );
};

export default LastNotificationsComponent;
