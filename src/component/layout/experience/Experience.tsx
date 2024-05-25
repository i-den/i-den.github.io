import React, { useCallback, useState } from "react";
import styles from "./Experience.module.css";
import { ExperienceCtx, initExperienceCtx } from "./ExperienceFns";
import ExperienceIcon from "./misc/ExperienceIcon";
import ExperienceText from "./misc/ExperienceText";

function createExperienceElements(
  experienceCtx: Record<string, ExperienceCtx>,
  setHovered: (name: string) => void,
  removeHovered: (name: string) => void,
  addListed: (name: string) => void,
) {
  return Object.entries(experienceCtx)
    .map(([name, ctx]) => {
      const experienceText = ctx.isListed ? (
        <ExperienceText
          key={name}
          name={name}
          isHovered={ctx.isHovered}
          setHovered={setHovered}
          removeHovered={removeHovered}
        />
      ) : undefined;

      const experienceIcon = (
        <ExperienceIcon
          key={name}
          name={name}
          src={ctx.src}
          alt={ctx.alt}
          title={ctx.title}
          isHovered={ctx.isHovered}
          setHovered={setHovered}
          removeHovered={removeHovered}
          addListed={addListed}
        />
      );

      return {
        experienceText: experienceText,
        experienceIcon: experienceIcon,
      };
    })
    .reduce<{ names: React.JSX.Element[]; icons: React.JSX.Element[] }>(
      (acc, curr) => {
        if (curr.experienceText) {
          acc.names.push(curr.experienceText);
        }
        acc.icons.push(curr.experienceIcon);
        return acc;
      },
      { names: [], icons: [] },
    );
}

function renderNames(names: React.JSX.Element[]) {
  if (names.length === 0) {
    return (
      <div className={styles.emptyTexts}>
        <span>Click any icon</span>
      </div>
    );
  }
  return <div className={styles.experienceText}>{names}</div>;
}

const Experience = () => {
  const [experienceCtx, setExperienceCtx] = useState(() =>
    initExperienceCtx().reduce(
      (acc, curr) => {
        acc[curr.name] = curr;
        return acc;
      },
      {} as Record<string, ExperienceCtx>,
    ),
  );

  const setHovered = useCallback(
    (name: string) => {
      setExperienceCtx((prevCtx) => {
        return {
          ...prevCtx,
          [name]: { ...prevCtx[name], isHovered: true },
        };
      });
    },
    [setExperienceCtx],
  );

  const removeHovered = useCallback(
    (name: string) => {
      setExperienceCtx((prevCtx) => {
        return {
          ...prevCtx,
          [name]: { ...prevCtx[name], isHovered: false },
        };
      });
    },
    [setExperienceCtx],
  );

  const addListed = useCallback(
    (name: string) => {
      setExperienceCtx((prevCtx) => {
        return {
          ...prevCtx,
          [name]: { ...prevCtx[name], isListed: true },
        };
      });
    },
    [setExperienceCtx],
  );
  const { names, icons } = createExperienceElements(experienceCtx, setHovered, removeHovered, addListed);

  return (
    <div className={styles.experienceWrapper}>
      <div className={styles.experience}>
        <h3>I have worked with:</h3>
        <div className={styles.experienceInnerWrapper}>
          {renderNames(names)}
          <div className={styles.experienceIcons}>{icons}</div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
