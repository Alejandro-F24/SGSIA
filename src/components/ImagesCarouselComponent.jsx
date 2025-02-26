import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import imagesData from "../data/principalSuppliersData.json";

/**
 * Componente de carrusel de logos de proveedores.
 *
 * Este componente muestra un carrusel animado con los logos de los principales proveedores,
 * utilizando Framer Motion para el efecto de desplazamiento continuo.
 */
export const ImagesCarouselComponent = () => {
  const [logos, setLogos] = useState([]);

  /**
   * useEffect para cargar los datos de los logos desde el JSON.
   * Extrae solo las propiedades "img" y "name" de cada objeto en imagesData.
   */
  useEffect(() => {
    setLogos(imagesData.map(({ img, name }) => ({ img, name })));
  }, []); // Dependencia vacía para ejecutar solo una vez al montar el componente

  return (
    <motion.div className="suppliers-logo-carousel-container">
      {/* Contenedor animado del carrusel */}
      <motion.div
        className="logo-track"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear", // Movimiento uniforme
        }}
      >
        {/* Renderiza los logos de los proveedores */}
        {logos.map((logo, index) => (
          <img
            key={index} // Usamos el índice como clave única
            src={logo.img} // URL de la imagen del proveedor
            alt={logo.name} // Nombre del proveedor para accesibilidad
            className="carousel-logo"
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ImagesCarouselComponent;
