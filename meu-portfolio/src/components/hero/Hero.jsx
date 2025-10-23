import { CodeXml, Mail , Download, MouseIcon } from "lucide-react";
import {SlSocialLinkedin, SlSocialGithub  } from "react-icons/sl"

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section>
      <div className={styles.divCodeXml}>
        <CodeXml size={150} color="#22D3EE" />
      </div>
      <h1>
        <span className={styles.h1SpanGradient}>Desenvolvedor</span>
        <span className={styles.h1Span}> Frontend</span>
      </h1>
      <p>Transformando idéias em experiências digitais incríveis</p>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonContact}> <Mail /> Entre em contato</button>
        <button className={styles.cvButton}> <Download /> Download CV</button>
      </div>
      <div className={styles.iconsContainer}>
        <span> <SlSocialGithub size={30} /> </span>
        <span> <SlSocialLinkedin size={30}/> </span>
        <span> <Mail size={30}/> </span>
      </div>
      <MouseIcon size={50} strokeWidth={1} className={styles.mouseIcon}/>
    </section>
  );
};

export default Hero;
