import { motion } from "framer-motion";

const EditSupplierComponent = ({ supplier, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <h2>En Desarrollo</h2>
      <img
        src="./media/general/underConstruction.jpg"
        alt=""
        style={{ width: "300px" }}
      />
    </motion.div>
  );
};

export default EditSupplierComponent;
