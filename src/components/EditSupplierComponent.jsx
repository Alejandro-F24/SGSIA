import { motion } from "framer-motion";

/**
 * Componente de modal para editar un proveedor.
 * ⚠️ **Actualmente en desarrollo**: No permite la edición real de proveedores, solo muestra un mensaje de "En Desarrollo".
 */
const EditSupplierComponent = ({ supplier, onClose }) => {
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

export default EditSupplierComponent;
