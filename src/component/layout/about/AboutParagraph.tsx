import styles from "./AboutParagraph.module.css";
import { useEffect, useRef, useState } from "react";
import { maskContent } from "./AboutFns";
import { motion } from "framer-motion";
import { listHighlight, registerHighlight } from "../../../features/elysium/mysteriesSlice";
import { HighlightCtx } from "../../../features/elysium/mysteryTypes";
import { useAppDispatch } from "../../../app/store";

export type AbountParagraphProps = {
  content: string;
  highlightCtx: HighlightCtx;
};

const AbountParagraph = (props: AbountParagraphProps) => {
  const { content, highlightCtx } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });
  const dispatch = useAppDispatch();

  const ref = useRef<HTMLDivElement>(null);

  const showMask = !isShown && isHovered;

  useEffect(() => {
    dispatch(
      registerHighlight({
        highlight: {
          categoryName: highlightCtx.categoryName,
          name: highlightCtx.name,
          content: highlightCtx.content,
        },
      }),
    );
  }, [dispatch, highlightCtx]);

  return (
    <div
      ref={ref}
      className={styles.aboutRow}
      onClick={() => {
        if (!isShown) {
          setIsShown(true);
          dispatch(
            listHighlight({
              categoryName: highlightCtx.categoryName,
              name: highlightCtx.name,
            }),
          );
        }
      }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onMouseMove={(event) => {
        if (!ref.current) {
          return;
        }
        const { x: rectX, y: rectY } = ref.current.getBoundingClientRect();

        const dx = event.clientX - rectX;
        const dy = event.clientY - rectY;

        setPosition({ x: dx, y: dy });
      }}
    >
      {
        <motion.p
          style={{
            visibility: showMask ? "visible" : "hidden",
          }}
          className={styles.mask}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            WebkitMaskPosition: `${x - 50}px ${y - 50}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
        >
          {content}
        </motion.p>
      }
      <p className={isShown ? "" : styles.originalBlurred}>{isShown ? content : maskContent(content)}</p>
    </div>
  );
};

export default AbountParagraph;
