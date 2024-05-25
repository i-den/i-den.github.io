import styles from "./Mystery.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector } from "../../app/store";
import CategoryHighlights from "./misc/CategoryHighlights";
import { selectCategories, selectHighlightsCount } from "./mysteriesSlice";
import { useState } from "react";

const Mystery = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = useAppSelector(selectCategories);
  const count = useAppSelector(selectHighlightsCount);

  console.log("Rendering Mysteries", categories);

  const highlights = Object.values(categories).map((category) => {
    return <CategoryHighlights key={category.name} categoryName={category.name} />;
  });

  const variants = {
    open: { opacity: 1, height: "16rem", overflow: "visible" },
    closed: { opacity: 0, height: "0", overflow: "hidden" },
  };

  return (
    <motion.div className={styles.mysteryContainer}>
      <div className={styles.mysteryHeader} onClick={() => setIsOpen((c) => !c)}>
        <h3>
          Found {count.listed} / {count.total + 1}
        </h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>

      <AnimatePresence>
        <motion.div initial="closed" animate={isOpen ? "open" : "closed"} variants={variants}>
          {highlights}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Mystery;
