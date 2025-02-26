import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Componente para agregar un nuevo proveedor.
 * Contiene un formulario con campos de entrada y validaciones básicas.
 */
const AddSupplierComponent = ({ onClose }) => {
  // Estados para los campos del formulario
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [serviceCount, setServiceCount] = useState("");
  const [contractValue, setContractValue] = useState("");
  const [associationDate, setAssociationDate] = useState("");
  const [address, setAddress] = useState("");

  /**
   * Formatea el valor del contrato en formato de moneda colombiana.
   */
  const formatCurrency = (value) => {
    const numericValue = parseFloat(value.replace(/[^0-9]/g, "")); // Quita caracteres no numéricos
    if (isNaN(numericValue)) return ""; // Evita NaN si el campo está vacío

    return `$${numericValue.toLocaleString("es-CO")} COP`; // Devuelve el valor formateado
  };

  /**
   * Maneja el envío del formulario y realiza una solicitud POST para agregar un proveedor.
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene la recarga de la página

    const formattedContractValue = formatCurrency(contractValue);

    // Construcción del objeto con los datos del nuevo proveedor
    const newSupplier = {
      id: Date.now().toString(), // Genera un ID único basado en la fecha actual
      name,
      service,
      serviceCount: parseInt(serviceCount, 10), // Convierte a número entero
      contractValue: formattedContractValue, // Guarda el valor con formato
      associationDate,
      address,
    };

    try {
      // Realiza una solicitud POST al servidor
      const response = await fetch("http://localhost:3000/suppliers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSupplier),
      });

      if (response.ok) {
        const data = await response.json(); // Convierte la respuesta a JSON
        console.log("Proveedor agregado correctamente:", data);
        onClose(); // Cierra el modal tras el éxito de la operación
      } else {
        console.error("Error al agregar proveedor");
      }
    } catch (error) {
      console.error("Error en la petición:", error); // Captura errores de conexión o servidor
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
