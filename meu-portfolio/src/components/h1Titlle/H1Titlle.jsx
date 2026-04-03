import styles from "./H1Titlle.module.css";

const H1Titlle = ({ children }) => {
  return <h1 className={`${styles.h1Projects}`}>{children}</h1>;
};

export default H1Titlle;
