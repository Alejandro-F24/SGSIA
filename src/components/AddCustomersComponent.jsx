import { useState } from "react";
import { motion } from "framer-motion";

const AddCustomerModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [nit, setNit] = useState("");
  const [number, setNumber] = useState("");
  const [registerDate, setRegisterDate] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCustomer = {
      id: Date.now().toString(), // Generar un ID único
      name,
      type,
      nit,
      number,
      registerDate,
      status,
      record: [], // Inicialmente vacío
      total: "", // Cadena vacía
    };

    try {
      const response = await fetch("http://localhost:3000/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCustomer),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Cliente agregado correctamente:", data);
        onClose(); // Cerrar modal solo si el registro es exitoso
      } else {
        console.error("Error al agregar cliente");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="add-customer-div"
    >
      <h2>Añadir Cliente</h2>
      <form onSubmit={handleSubmit} className="add-customers-form">
        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Tipo:</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />

        <label>NIT:</label>
        <input
          type="text"
          value={nit}
          onChange={(e) => setNit(e.target.value)}
          required
        />

        <label>Teléfono:</label>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />

        <label>Fecha de Registro:</label>
        <input
          type="date"
          value={registerDate}
          onChange={(e) => setRegisterDate(e.target.value)}
          required
        />

        <label>Estado:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="">Seleccionar</option>
          <option value="Activo">Activo</option>
          <option value="Inactivo">Inactivo</option>
          <option value="Suspendido">Suspendido</option>
        </select>

        <button type="submit">Guardar</button>
      </form>
    </motion.div>
  );
};

export default AddCustomerModal;
