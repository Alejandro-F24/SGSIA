/**
 * Componente reutilizable que representa una carta en el dashboard.
 *
 *  Props (Información guardada en cardsData.json):
 * @param {string} image - URL o importación de la imagen a mostrar.
 * @param {string} backgroundColor - Color de fondo del header de la carta (puede ser un código hexadecimal o nombre de color).
 * @param {number} quantity - Número que se mostrará en la carta.
 * @param {string} text - Descripción o título de la carta.
 *
 * Ejemplo de uso:
 * <CardComponent
 *    image="/assets/chat.png"
 *    backgroundColor="#337AB7"
 *    quantity={25}
 *    text="Nuevos Reclamos"
 * />
 */

import SwitchNumber from "./switchNumberComponent";

export const CardComponent = ({ image, backgroundColor, quantity, text }) => {
  return (
    // Estructura de la carta
    <div className="carta">
      <div className="carta-header" style={{ backgroundColor }}>
        <div className="carta-header-foto">
          <img src={image} alt="Icono que se mostrara dependiendo la carta" />
        </div>
        <div className="carta-header-text">
          <h2 className="carta-header-cantidad">
            <SwitchNumber target={quantity} />
          </h2>
          <p className="carta-header-paragraph">{text}</p>
        </div>
      </div>
      <div className="carta-body">
        <button className="go-to-button">Ver Detalles</button>
      </div>
    </div>
  );
};

export default CardComponent;
