import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Componente de modal para eliminar un proveedor sin confirmación intermedia.
 * Permite al usuario ingresar un ID y eliminar el proveedor directamente.
 */
const DeleteSupplierComponent = ({ onClose, onDeleteSuccess }) => {
  // Estado para almacenar el ID del proveedor a eliminar
  const [supplierId, setSupplierId] = useState("");

  /**
   * Maneja la eliminación del proveedor.
   * Verifica que se haya ingresado un ID válido y realiza la solicitud DELETE al servidor.
   */
  const handleDelete = async () => {
    if (!supplierId) {
      alert("⚠️ Debes ingresar un ID válido.");
      return;
    }

    try {
      // Petición DELETE al servidor con el ID proporcionado
      const response = await fetch(
        `http://localhost:3000/suppliers/${supplierId}`,
        {
          method: "DELETE",
        }
      );

      // Verifica si la petición fue exitosa
      if (!response.ok) {
        throw new Error("Error al eliminar el proveedor");
      }

      // Mensaje de éxito en la consola
      console.log(`Proveedor con ID ${supplierId} eliminado con éxito`);

      // Llama a la función de éxito para actualizar la UI
      onDeleteSuccess(supplierId);

      // Cierra el modal
      onClose();
    } catch (error) {
      console.error("Error eliminando proveedor:", error);
      alert("No se pudo eliminar el proveedor. Verifica el ID.");
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
      <h2>Eliminar Proveedor</h2>
      <p>Ingresa el ID del proveedor que deseas eliminar:</p>
      <input
        type="number"
        value={supplierId}
        onChange={(e) => setSupplierId(e.target.value)}
        placeholder="ID del proveedor"
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

export default DeleteSupplierComponent;
