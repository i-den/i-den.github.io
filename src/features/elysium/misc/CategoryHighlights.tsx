import styles from "./CategoryHighlights.module.css";
import { useState } from "react";
import { makeSelectHighlightsForCategory } from "../mysteriesSlice";
import { CategoryName } from "../mysteryTypes";
import { useAppSelector } from "../../../app/store";
import { Highlight } from "../mysteryTypes";
import React from "react";
import { motion } from "framer-motion";

export type CategoryHighlightsProps = {
  categoryName: CategoryName;
};

function renderHighlights(highlights: Record<string, Highlight>) {
  return (
    <ul className={styles.categoryHighlightsList}>
      {Object.values(highlights)
        .filter((highlight) => highlight.listed)
        .map((highlight) => (
          <li key={highlight.name} className={styles.categoryHighlight}>
            {highlight.content}
          </li>
        ))}
    </ul>
  );
}

const CategoryHighlights = (props: CategoryHighlightsProps) => {
  const { categoryName } = props;

  const [isOpen, setIsOpen] = useState(false);
  const highlights = useAppSelector(makeSelectHighlightsForCategory(categoryName));

  const variants = {
    open: { opacity: 1, height: "auto", overflow: "visible" },
    closed: { opacity: 0, height: "0", overflow: "hidden" },
  };

  return (
    <>
      <div className={styles.categoryHeader} onClick={() => setIsOpen((prev) => !prev)}>
        <h4>{categoryName}</h4>
        <span>{isOpen ? "-" : "+"}</span>
      </div>

      <motion.div
        className={styles.categoryHighlights}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        {renderHighlights(highlights)}
      </motion.div>
    </>
  );
};

export default React.memo(CategoryHighlights);
