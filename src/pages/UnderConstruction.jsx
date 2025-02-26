/**
 * UnderConstruction Component
 *
 * Este componente representa una página de "En Construcción".
 * Se utiliza para indicar que una sección de la aplicación aún no está disponible.
 *
 * Contiene un encabezado y una imagen ilustrativa de construcción.
 */

import HeaderComponent from "../components/HeaderComponent";
import "./UnderConstruction.css";

const UnderConstruction = () => {
  return (
    <>
      {/* Encabezado de la página */}
      <header>
        <HeaderComponent />
      </header>

      {/* Contenido principal: Mensaje de construcción */}
      <div className="construction-container">
        <h1 className="construction-title">🚧 En Construcción 🚧</h1>
        <div className="construction-image">
          <img
            src="/media/general/underConstruction.jpg"
            alt="Página en construcción"
          />
        </div>
      </div>
    </>
  );
};

export default UnderConstruction;
