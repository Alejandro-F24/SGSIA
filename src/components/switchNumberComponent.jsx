// DOCUMENTAR MEJOR Y REVISAR FUNCIONAMIENTO

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

const SwitchNumber = ({ target }) => {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // Animamos el valor de count desde 0 hasta target en 3 segundos
    const controls = animate(count, target, {
      duration: 2, // Duración de 3 segundos
      ease: "easeInOut", // Puedes cambiar el easing según tu preferencia
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
    });
    // Limpiamos la animación cuando se desmonte el componente
    return () => controls.stop();
  }, [target, count]);

  return (
    <motion.div style={{ fontSize: "48px", fontWeight: "bold" }}>
      {displayValue}
    </motion.div>
  );
};

export default SwitchNumber;
