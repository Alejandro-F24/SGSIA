import { useState } from "react";
import { motion } from "framer-motion";

const DeleteSupplierComponent = ({ onClose, onDeleteSuccess }) => {
  const [supplierId, setSupplierId] = useState("");

  const handleDelete = async () => {
    if (!supplierId) {
      alert("⚠️ Debes ingresar un ID válido.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/suppliers/${supplierId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Error al eliminar el proveedor");
      }

      console.log(`Proveedor con ID ${supplierId} eliminado con éxito`);
      onDeleteSuccess(supplierId); // Actualizar la lista en la UI
      onClose();
    } catch (error) {
      console.error("Error eliminando proveedor:", error);
      alert("No se pudo eliminar el proveedor. Verifica el ID.");
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
