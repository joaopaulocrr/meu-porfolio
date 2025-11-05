import { motion } from "framer-motion";

import styles from "./Navbar.module.css";

import logo from '../../assets/logoPequena.png'


const Navbar = () => {
  const links = [
    {nome: "Home", id: "home", url: "#home"},
    {nome: "About", id: "about", url: "#about"},
    {nome: "Courses", id: "courses", url: "#courses"},
    {nome: "Projects", id: "projects", url: "#projects"},
    {nome: "Contacts", id: "contacts", url: "#contacts"}
  ]
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <motion.div whileHover={{ scale: 1.05 }} className={styles.imgContainer}>
          <img src={logo} alt="Logo do desenvolvedor" />
        </motion.div>
        <nav className={styles.navigation}>
          <ul className={styles.listNavigation}>
            {links.map((link) => (
            
              <li key={link.id}>
                <a href={link.url}>
                  {link.nome}
                </a>
              </li>
            ))}
            {/* <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li> */}
          </ul>
        </nav>
      </div>
      {/* <motion className="di"></motion> */}
    </header>
  );
};

export default Navbar;
