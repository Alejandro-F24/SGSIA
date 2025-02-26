import { motion } from "framer-motion";
import { useState } from "react";

/**
 * Componente de modal para editar un cliente.
 * ⚠️ **Actualmente en desarrollo**: No permite la edición real de clientes, solo muestra un mensaje de "En Desarrollo".
 */
const EditCustomerModal = ({ customer, onClose }) => {
  const [name, setName] = useState(customer?.name || "");
  const [email, setEmail] = useState(customer?.email || "");

  /**
   * Maneja el envío del formulario de edición.
   * ⚠️ **Funcionalidad en desarrollo**: Actualmente solo imprime los datos en consola y cierra el modal.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cliente Editado:", { name, email });
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Mensaje indicando que el componente está en desarrollo */}
      <h2>En Desarrollo</h2>
      <img
        src="./media/general/underConstruction.jpg"
        alt="En construcción"
        style={{ width: "300px" }}
      />
    </motion.div>
  );
};

export default EditCustomerModal;
