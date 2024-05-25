import React from "react";
import styles from "./ExperienceText.module.css";

export type ExperienceTextProps = {
  name: string;
  isHovered: boolean;
  setHovered: (name: string) => void;
  removeHovered: (name: string) => void;
};

function evalClassNames(isHovered: boolean) {
  const classNames = [styles.experienceTextCell];
  if (isHovered) {
    classNames.push(styles.experienceTextCellHovered);
  }
  return classNames.join(" ");
}

const ExperienceText = (props: ExperienceTextProps) => {
  const { name, isHovered, setHovered, removeHovered } = props;

  return (
    <div
      key={name}
      className={evalClassNames(isHovered)}
      onMouseEnter={() => setHovered(name)}
      onMouseLeave={() => removeHovered(name)}
    >
      <span>{name}</span>
    </div>
  );
};

export default React.memo(ExperienceText);
