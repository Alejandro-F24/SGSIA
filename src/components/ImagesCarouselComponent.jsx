import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import imagesData from "../data/principalSuppliersData.json";

export const ImagesCarouselComponent = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    setLogos(imagesData.map(({ img, name }) => ({ img, name })));
  }, []); //Recordar el []
  return (
    <motion.div className="suppliers-logo-carousel-container">
      <motion.div
        className="logo-track"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.img} // Corregido: usar la propiedad "img"
            alt={logo.name}
            className="carousel-logo"
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ImagesCarouselComponent;
