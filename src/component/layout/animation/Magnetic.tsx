import { motion } from "framer-motion";
import React, { MouseEventHandler, useRef, useState } from "react";

export type MagneticProps = {
  children: React.ReactNode;
  className?: string;
};

const Magnetic = ({ children, className }: MagneticProps) => {
  const self = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!self.current) {
      return;
    }

    const { clientX, clientY } = event;
    const { height, width, left, top } = self.current.getBoundingClientRect();

    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={self}
      className={className}
      style={{
        position: "relative",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 30,
        mass: 0.1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
