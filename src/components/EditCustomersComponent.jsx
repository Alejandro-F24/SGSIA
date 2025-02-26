import { motion } from "framer-motion";
import { useState } from "react";

const EditCustomerModal = ({ customer, onClose }) => {
  const [name, setName] = useState(customer?.name || "");
  const [email, setEmail] = useState(customer?.email || "");

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
      <h2>En Desarrollo</h2>
      <img
        src="./media/general/underConstruction.jpg"
        alt=""
        style={{ width: "300px" }}
      />
    </motion.div>
  );
};

export default EditCustomerModal;
