import styles from "./About.module.css";
import { initAboutParagraphs } from "./AboutFns";
import AbountParagraph from "./AboutParagraph";

function renderAboutParagraphs() {
  return initAboutParagraphs().map((aboutCtx, index) => {
    return <AbountParagraph content={aboutCtx.content} highlightCtx={aboutCtx.highlightCtx} key={index} />;
  });
}

const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.about}>
        <section>
          <h3 className={styles.aboutHeading}>About</h3>
          <div className={styles.aboutRows}>{renderAboutParagraphs()}</div>
        </section>
      </div>
    </div>
  );
};

export default About;
