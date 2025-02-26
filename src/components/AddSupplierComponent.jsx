import { useState } from "react";
import { motion } from "framer-motion";

const AddSupplierComponent = ({ onClose }) => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [serviceCount, setServiceCount] = useState("");
  const [contractValue, setContractValue] = useState("");
  const [associationDate, setAssociationDate] = useState("");
  const [address, setAddress] = useState("");

  // Función para formatear el valor del contrato
  const formatCurrency = (value) => {
    const numericValue = parseFloat(value.replace(/[^0-9]/g, "")); // Quita caracteres no numéricos
    if (isNaN(numericValue)) return ""; // Evita NaN si el campo está vacío

    return `$${numericValue.toLocaleString("es-CO")} COP`; // Formato Colombiano
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedContractValue = formatCurrency(contractValue);

    const newSupplier = {
      id: Date.now().toString(),
      name,
      service,
      serviceCount: parseInt(serviceCount, 10),
      contractValue: formattedContractValue, // Guarda con formato
      associationDate,
      address,
    };

    try {
      const response = await fetch("http://localhost:3000/suppliers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSupplier),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Proveedor agregado correctamente:", data);
        onClose(); // Cerrar modal solo si el registro es exitoso
      } else {
        console.error("Error al agregar proveedor");
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
      className="add-supplier-div"
    >
      <h2>Añadir Proveedor</h2>
      <form onSubmit={handleSubmit} className="add-supplier-form">
        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Servicio:</label>
        <input
          type="text"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        />

        <label>Cantidad de Servicios:</label>
        <input
          type="number"
          value={serviceCount}
          onChange={(e) => setServiceCount(e.target.value)}
          required
        />

        <label>Valor del Contrato:</label>
        <input
          type="number"
          value={contractValue}
          onChange={(e) => setContractValue(e.target.value)}
          required
        />

        <label>Fecha de Asociación:</label>
        <input
          type="date"
          value={associationDate}
          onChange={(e) => setAssociationDate(e.target.value)}
          required
        />

        <label>Dirección:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <button type="submit">Guardar</button>
      </form>
    </motion.div>
  );
};

export default AddSupplierComponent;
