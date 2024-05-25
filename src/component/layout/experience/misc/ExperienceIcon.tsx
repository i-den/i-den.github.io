import React, { useEffect, useState } from "react";
import styles from "./ExperienceIcon.module.css";
import Magnetic from "../../animation/Magnetic";
import { useAppDispatch } from "../../../../app/store";
import { listHighlight, registerHighlight } from "../../../../features/elysium/mysteriesSlice";
import { CategoryName } from "../../../../features/elysium/mysteryTypes";

export type ExperienceIconProps = {
  name: string;
  src: string;
  alt: string;
  title: string;
  isHovered: boolean;
  setHovered: (name: string) => void;
  removeHovered: (name: string) => void;
  addListed: (name: string) => void;
};

function evalClassNames(isHovered: boolean) {
  const classNames = [styles.experienceIcon];
  if (isHovered) {
    classNames.push(styles.experienceIconHovered);
  }
  return classNames.join(" ");
}

const ExperienceIcon = (props: ExperienceIconProps) => {
  const { name, src, alt, title, isHovered, setHovered, removeHovered, addListed } = props;

  const [isRevealed, setIsRevealed] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(registerHighlight({ highlight: { categoryName: CategoryName.Experience, name, content: name } }));
  }, [dispatch, name]);

  return (
    <div
      className={styles.experienceIconCell}
      onMouseEnter={() => {
        setIsRevealed(true);
        setHovered(name);
      }}
      onMouseLeave={() => {
        if (!isClicked) {
          setIsRevealed(false);
        }
        removeHovered(name);
      }}
      onClick={() => {
        setIsClicked(true);
        addListed(name);
        if (!isClicked) {
          dispatch(listHighlight({ categoryName: CategoryName.Experience, name }));
        }
      }}
    >
      <Magnetic className={evalClassNames(isHovered)}>
        <img className={isRevealed ? "" : styles.experienceIconBlurred} src={src} alt={alt} title={title} />
      </Magnetic>
    </div>
  );
};

export default React.memo(ExperienceIcon);
