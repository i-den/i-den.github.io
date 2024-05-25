import { RefObject, useEffect, useState } from "react";

const useMousePosition = (ref: RefObject<HTMLElement>) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const current = ref.current;
    const enter = () => setIsHovered(true);
    const leave = () => setIsHovered(false);
    const updatePosition = (event: MouseEvent) => {
      if (current && isHovered) {
        const rect = current.getBoundingClientRect();
        setPosition({
          x: ((event.clientX - rect.left) / rect.width) * 200 - 100,
          y: ((event.clientY - rect.top) / rect.height) * 200 - 100,
        });
      }
    };

    if (current) {
      current.addEventListener("mouseenter", enter);
      current.addEventListener("mouseleave", leave);
      document.addEventListener("mousemove", updatePosition);
    }

    return () => {
      if (current) {
        current.removeEventListener("mouseenter", enter);
        current.removeEventListener("mouseleave", leave);
      }
      document.removeEventListener("mousemove", updatePosition);
    };
  }, [ref, isHovered]);

  return position;
};

export default useMousePosition;
