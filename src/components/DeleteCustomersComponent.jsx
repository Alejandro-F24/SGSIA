import { useState } from "react";
import { motion } from "framer-motion";

const DeleteCustomerModal = ({ onClose, onDeleteSuccess }) => {
  const [customerId, setCustomerId] = useState("");

  const handleDelete = async () => {
    if (!customerId) {
      alert("⚠️ Debes ingresar un ID válido.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/customers/${customerId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Error al eliminar el cliente");
      }

      console.log(" Cliente con ID ${customerId} eliminado con éxito");
      onDeleteSuccess(customerId); // Actualizar la lista en CustomersPage
      onClose();
    } catch (error) {
      console.error("Error eliminando cliente:", error);
      alert(" No se pudo eliminar el cliente. Verifica el ID.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="modal-container-delete"
    >
      <h2>Eliminar Cliente</h2>
      <p>Ingresa el ID del cliente que deseas eliminar:</p>
      <input
        type="number"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        placeholder="ID del cliente"
      />
      <button
        onClick={handleDelete}
        style={{ background: "red", color: "white" }}
      >
        Eliminar
      </button>
      <button onClick={onClose}>Cancelar</button>
    </motion.div>
  );
};

export default DeleteCustomerModal;
