import styles from "./Header.module.css";
import profilePic from "../../../assets/pp.jpg";

const Header = () => {
  return (
    <section className={styles.headerSection}>
      <header className={styles.header}>
        <div className={styles.imageWrapper}>
          <img className={styles.profileImage} src={profilePic} alt="Ivan Denchev" />
        </div>

        <div className={styles.profileName}>
          <h1>Ivan Denchev</h1>
        </div>

        <div className={styles.profilePosition}>
          <h2>Java Developer</h2>
        </div>
      </header>
    </section>
  );
};

export default Header;
