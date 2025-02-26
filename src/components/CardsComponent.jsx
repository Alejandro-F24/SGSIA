/**
 * Componente que renderiza múltiples cartas en el dashboard utilizando CardComponent.
 *
 * Toma los datos de un archivo JSON y genera dinámicamente las cartas según su contenido.
 *
 * Fuentes de datos:
 * - "cardsData.json": Contiene un array de objetos con la información de cada carta
 * (image, background, quantity y text)
 *
 * Ejemplo de uso:
 * Importar e incluir <CardsComponents /> donde desees que se muestren
 */
import { CardComponent } from "./CardComponent";
import cardsData from "../data/cardsData.json";

export const CardsComponents = () => {
  return (
    <div className="card-container">
      {cardsData.map((card) => (
        <CardComponent
          key={card.id}
          image={card.image}
          backgroundColor={card.backgroundColor}
          quantity={card.quantity}
          text={card.text}
        />
      ))}
    </div>
  );
};

export default CardsComponents;
