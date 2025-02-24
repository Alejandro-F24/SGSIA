// DOCUMENTAR Y REPASAR FUNCIONALIDAD

import { motion } from "framer-motion";
import lastNotiData from "../data/lastNotiData.json";

export const LastNotificationsComponent = () => {
  return (
    <div className="last-notification">
      <div className="top-bar"></div>
      <div className="last-notification-title">
        <motion.h3
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Notificaciones Principales
        </motion.h3>
      </div>
      <ul>
        {lastNotiData.map((notification) => (
          <motion.li
            key={notification.id} // revisar el porque
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: notification.id * 0.25 }}
          >
            <span className="text-list">
              <img src={notification.img} alt="imagen notificación" />
              {notification.message}
            </span>
            <span className="time-list-text">{notification.time}</span>
          </motion.li>
        ))}
      </ul>
      <div className="notification-button">
        <button className="go-to-button">Ver Notificaciones</button>
      </div>
    </div>
  );
};
