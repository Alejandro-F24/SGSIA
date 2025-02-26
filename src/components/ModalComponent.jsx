import { motion } from "framer-motion";

const ModalComponent = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          Cerrar
        </button>
        {children}
      </div>
    </motion.div>
  );
};

export default ModalComponent;
