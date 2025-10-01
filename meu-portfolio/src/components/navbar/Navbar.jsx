import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <div className={styles.imgContainer}>
          <img src="./src/assets/logoPequena.png" alt="Logo do desenvolvedor" />
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.listNavigation}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/courses"}>Courses</Link>
            </li>
            <li>
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
