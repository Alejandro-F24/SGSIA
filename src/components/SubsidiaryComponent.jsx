import { motion } from "framer-motion";
import { useState } from "react";
import subsidaryData from "../data/subsidiaryData.json";

export const SubsidiaryComponent = () => {
  // estado para almacenar el municipio seleccionado
  const [selectedTown, setSelectedTown] = useState(null);

  // Handler para el formulario, que previeneel reload y actualiza el estado
  const handleSubmit = (e) => {
    e.preventDefault();
    // Obtenemos el valor seleccionado (usando el atributo "name" en el select)
    const town = e.target.elements.townSelect.value;
    // Buscamos en el subsidaryDatael objeto cuyo "town" coincida con el seleccionado
    const found = subsidaryData.find(
      (item) => item.town.toLowerCase() === town.toLowerCase()
    );
    setSelectedTown(found);
  };

  const defaultOSMEmbedURL =
    "https://www.openstreetmap.org/export/embed.html?bbox=-73.46008300781251%2C4.354646535975951%2C-69.92797851562501%2C6.222492355661559&amp;layer=mapnik";
  const mapURL = selectedTown ? selectedTown.url : defaultOSMEmbedURL;
  return (
    <>
      <div className="town-filter">
        <div className="filter">
          <div className="filter-heading">
            <h2> Explora Los Municipios </h2>
            <img src="/media/pin.png" alt="Icono de Ubicación" />
          </div>
          <p>¿Deseas ver información de un municipio en especifico?</p>
          <form onSubmit={handleSubmit}>
            <select name="townSelect" defaultValue={""}>
              <option value="" hidden>
                Selecciona un Municipio
              </option>
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
