import styles from "./App.module.css";
import Header from "./component/layout/header/Header";
import About from "./component/layout/about/About";
import Experience from "./component/layout/experience/Experience";
import Interests from "./component/layout/interests/Interests";
import Mystery from "./features/elysium/Mystery";

function App() {
  return (
    <>
      <div className={styles.sectionContainer}>
        <Header />
      </div>

      <main>
        <div className={`${styles.sectionContainer} ${styles.flexContainer}`}>
          <About />
          <Experience />
        </div>

        <div className={styles.sectionContainer}>
          <Interests />
        </div>

        <Mystery />
      </main>
    </>
  );
}

export default App;
