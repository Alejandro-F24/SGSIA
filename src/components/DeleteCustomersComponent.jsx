import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Componente de modal para eliminar un cliente sin confirmación intermedia.
 * Permite al usuario ingresar un ID y eliminar el cliente directamente.
 */
const DeleteCustomerModal = ({ onClose, onDeleteSuccess }) => {
  // Estado para almacenar el ID del cliente a eliminar
  const [customerId, setCustomerId] = useState("");

  /**
   * Maneja la eliminación del cliente.
   * Verifica que se haya ingresado un ID válido y realiza la solicitud DELETE al servidor.
   */
  const handleDelete = async () => {
    if (!customerId) {
      alert("⚠️ Debes ingresar un ID válido.");
      return;
    }

    try {
      // Petición DELETE al servidor con el ID proporcionado
      const response = await fetch(
        `http://localhost:3000/customers/${customerId}`,
        {
          method: "DELETE",
        }
      );

      // Verifica si la petición fue exitosa
      if (!response.ok) {
        throw new Error("Error al eliminar el cliente");
      }

      // Muestra un mensaje de éxito
      alert(`✅ Cliente con ID ${customerId} eliminado con éxito.`);

      // Llama la función de éxito y cierra el modal
      onDeleteSuccess(customerId);
      onClose();
    } catch (error) {
      console.error("Error eliminando cliente:", error);
      alert("❌ No se pudo eliminar el cliente. Verifica el ID.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }} // Efecto de entrada desde la izquierda
      animate={{ opacity: 1, x: 0 }} // Aparece en la pantalla
      exit={{ opacity: 0, scale: 0.5 }} // Efecto al cerrar el modal
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="modal-container-delete"
    >
      <h2>Eliminar Cliente</h2>
      <p>Ingresa el ID del cliente que deseas eliminar:</p>

      {/* Input para ingresar el ID del cliente */}
      <input
        type="number"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        placeholder="ID del cliente"
      />

      {/* Botón para ejecutar la eliminación */}
      <button
        onClick={handleDelete}
        style={{ background: "red", color: "white" }}
      >
        Eliminar
      </button>

      {/* Botón para cerrar el modal sin eliminar */}
      <button onClick={onClose}>Cancelar</button>
    </motion.div>
  );
};

export default DeleteCustomerModal;
