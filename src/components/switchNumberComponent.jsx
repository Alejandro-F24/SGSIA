// COMPONENTE: SwitchNumber
// Descripción: Este componente muestra un número animado que cambia dinámicamente
// desde 0 hasta el valor especificado en la prop "target" utilizando Framer Motion.

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

const SwitchNumber = ({ target }) => {
  // "count" es un valor animado proporcionado por Framer Motion
  const count = useMotionValue(0);

  // Estado local para mostrar el valor animado en la pantalla
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // Creación de la animación que actualiza "count" desde 0 hasta "target"
    const controls = animate(count, target, {
      duration: 2.5, // Duración de la animación en segundos
      ease: "easeInOut",
      onUpdate: (latest) => {
        // Redondeamos el valor animado y lo actualizamos en el estado
        setDisplayValue(Math.round(latest));
      },
    });

    // Limpiamos la animación cuando el componente se desmonta o "target" cambia
    return () => controls.stop();
  }, [target, count]); // Dependencias: se ejecuta cada vez que "target" cambia

  return (
    // Se muestra el número animado dentro de un <motion.div>
    <motion.div style={{ fontSize: "48px", fontWeight: "bold" }}>
      {displayValue}
    </motion.div>
  );
};

export default SwitchNumber;
