import { motion } from "framer-motion";
import { useState } from "react";
import subsidaryData from "../data/subsidiaryData.json";

/**
 * Componente SubsidiaryComponent
 *
 * Este componente permite al usuario seleccionar un municipio de una lista desplegable y ver información relevante
 * sobre las sucursales, reclamos, clientes y entregas en dicho municipio. Además, muestra un mapa interactivo
 * utilizando OpenStreetMap.
 */
export const SubsidiaryComponent = () => {
  // Estado para almacenar el municipio seleccionado
  const [selectedTown, setSelectedTown] = useState(null);

  /**
   * Maneja el evento de envío del formulario.
   *
   * @param {Event} e - Evento del formulario.
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita la recarga de la página

    // Obtiene el valor seleccionado en el campo "select"
    const town = e.target.elements.townSelect.value;

    // Busca en subsidaryData el municipio que coincide con la selección
    const found = subsidaryData.find(
      (item) => item.town.toLowerCase() === town.toLowerCase()
    );

    // Actualiza el estado con el municipio encontrado
    setSelectedTown(found);
  };

  // URL por defecto para mostrar un mapa genérico cuando no hay municipio seleccionado
  const defaultOSMEmbedURL =
    "https://www.openstreetmap.org/export/embed.html?bbox=-73.46008300781251%2C4.354646535975951%2C-69.92797851562501%2C6.222492355661559&amp;layer=mapnik";

  // Si hay un municipio seleccionado, usa su URL de mapa; si no, usa la URL por defecto
  const mapURL = selectedTown ? selectedTown.url : defaultOSMEmbedURL;

  return (
    <>
      <div className="town-filter">
        <div className="filter">
          {/* Encabezado del filtro */}
          <div className="filter-heading">
            <h2> Explora Los Municipios </h2>
            <img src="/media/pin.png" alt="Icono de Ubicación" />
          </div>
          <p>¿Deseas ver información de un municipio en específico?</p>

          {/* Formulario para seleccionar el municipio */}
          <form onSubmit={handleSubmit}>
            <select name="townSelect" defaultValue={""}>
              <option value="" hidden>
                Selecciona un Municipio
              </option>
              {/* Se generan las opciones del select a partir de subsidaryData */}
              {subsidaryData.map((item) => (
                <option key={item.town} value={item.town}>
                  {item.town}
                </option>
              ))}
            </select>
            <button className="go-to-button" type="submit">
              Filtrar
            </button>
          </form>
        </div>

        {/* Contenedor de información filtrada */}
        <motion.div
          key={selectedTown ? selectedTown.town : "default"}
          className="filter-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {selectedTown ? (
            <>
              <div className="filter-info-title">
                <h2>{selectedTown.town}</h2>
              </div>
              <div>
                <img src="/media/sucursales.png" alt="" />
                <p>
                  Cantidad de sucursales: {selectedTown.quantitySubsidiaries}
                </p>
              </div>
              <div>
                <img src="/media/reclamos.png" alt="" />
                <p>Promedio de reclamos: {selectedTown.claimsQuantity}</p>
              </div>
              <div>
                <img src="/media/usuarios.png" alt="" />
                <p>Clientes en promedio: {selectedTown.customersQuantity}</p>
              </div>
              <div>
                <img src="/media/entregas.png" alt="" />
                <p>Entregas en promedio: {selectedTown.deliveriesQuantity}</p>
              </div>
            </>
          ) : (
            <div className="filter-info-title">
              <h2>Ningún Municipio Seleccionado</h2>
            </div>
          )}
        </motion.div>
      </div>

      {/* Mapa de OpenStreetMap */}
      <div className="map-container">
        <div className="map">
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <iframe
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src={mapURL}
              style={{
                boxShadow: "0 8px 12px 0 rgba(0,0,0,0.25)",
                width: "100%",
                height: "100%",
                cursor: "pointer",
                borderRadius: "20px",
              }}
              title={
                "mapa de " + (selectedTown ? selectedTown.town : "Casanare")
              }
            ></iframe>
          </motion.a>
        </div>
      </div>
    </>
  );
};

export default SubsidiaryComponent;
