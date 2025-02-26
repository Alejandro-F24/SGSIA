import { motion } from "framer-motion";

/**
 * Componente de Modal.
 *
 * Este componente representa una ventana modal animada que se muestra
 * cuando `isOpen` es `true`. Utiliza Framer Motion para agregar una
 * animación de desvanecimiento al aparecer y desaparecer.
 *
 * @param {boolean} isOpen - Indica si el modal está abierto o cerrado.
 * @param {function} onClose - Función para cerrar el modal.
 * @param {React.ReactNode} children - Contenido que se mostrará dentro del modal.
 */
const ModalComponent = ({ isOpen, onClose, children }) => {
  // Si el modal no está abierto, no se renderiza nada.
  if (!isOpen) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="modal-content">
        {/* Botón para cerrar el modal */}
        <button className="modal-close" onClick={onClose}>
          Cerrar
        </button>

        {/* Contenido dinámico del modal */}
        {children}
      </div>
    </motion.div>
  );
};

export default ModalComponent;
