import styles from "./Interests.module.css";

import cc from "./../../../assets/icons/cloud-computing.svg";
import fe from "./../../../assets/icons/front-end.svg";
import hobby from "./../../../assets/icons/hobby.svg";

const Interests = () => {
  return (
    <div className={styles.interestsWidthWrapper}>
      <section className={styles.interests}>
        <div className={styles.interestsTitle}>
          <h3>Interests</h3>
        </div>

        <div className={styles.interestsCols}>
          <div className={styles.interestsCol}>
            <div className={styles.interestsHeader}>
              <div className={styles.interestsHeaderBackground}></div>
              <div className={styles.interestsHeaderImageRow}>
                <div className={styles.interestsHeaderImageContainer}>
                  <img src={hobby} className={styles.interestsHeaderImage} />
                </div>
              </div>
              <div className={styles.interestsHeaderTitle}>
                <h4>Hobby</h4>
              </div>
            </div>
            <div className={styles.interestsListContainer}>
              <ul className={styles.interestsList}>
                <li>Health / Fitness</li>
                <li>Literature</li>
                <li>Meditation</li>
                <li>Learning</li>
              </ul>
            </div>
          </div>
          <div className={styles.interestsCol}>
            <div className={styles.interestsHeader}>
              <div className={styles.interestsHeaderBackground}></div>
              <div className={styles.interestsHeaderImageRow}>
                <div className={styles.interestsHeaderImageContainer}>
                  <img src={cc} className={styles.interestsHeaderImage} />
                </div>
              </div>
              <div className={styles.interestsHeaderTitle}>
                <h4>Back End</h4>
              </div>
            </div>
            <div className={styles.interestsListContainer}>
              <ul className={styles.interestsList}>
                <li>Java 21</li>
                <li>Functional</li>
                <li>Reactive</li>
                <li>Spring</li>
                <li>GraalVM</li>
                <li>Testing</li>
                <li>SoA</li>
              </ul>
            </div>
          </div>
          <div className={styles.interestsCol}>
            <div className={styles.interestsHeader}>
              <div className={styles.interestsHeaderBackground}></div>
              <div className={styles.interestsHeaderImageRow}>
                <div className={styles.interestsHeaderImageContainer}>
                  <img src={fe} className={styles.interestsHeaderImage} />
                </div>
              </div>
              <div className={styles.interestsHeaderTitle}>
                <h4>Front End</h4>
              </div>
            </div>
            <div className={styles.interestsListContainer}>
              <ul className={styles.interestsList}>
                <li>React</li>
                <li>UI Design</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Interests;
