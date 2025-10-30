import styles from "./About.module.css";

import { Heart, Rocket, Sparkles } from "lucide-react";

const About = ({ id }) => {
  return (
    <section id={id} className={styles.sectionAbout}>
      <h1 className={styles.h1About}>Sobre Mim</h1>

      <div className={styles.divImgText}>
        <div className={styles.divsImgContainer}>
          <div className={styles.backgroundImage}>
            <div className={styles.imgContainer}>
              <img src="https://images.pexels.com/photos/12899158/pexels-photo-12899158.jpeg" alt="Minha foto Programando" className={`${styles.myImageProgramming}`}/>
            </div>
          </div>
        </div>
        <div className={styles.aboutText}>
          <p className={`${styles.paragraph}`}>
            Olá! Sou um desenvolvedor apaixonado por tecnologia e inovação.
            Estou começando minha jornada no mundo da programação e cada dia é
            uma nova oportunidade de aprender algo incrível.
          </p>
          <p className={`${styles.paragraph}`}>
            Meu foco está em criar soluções web modernas e funcionais, sempre
            buscando as melhores práticas e tecnologias mais recentes.
          </p>

          <div className={`${styles.divsMyObjective}`}>
            <div className={`${styles.divsContainerIcons}`}>
              <Sparkles size={40} />
            </div>
            <p className={`${styles.paragraphMyObjectives}`}>
              Sempre aprendendo novas tecnologias
            </p>
          </div>

          <div className={`${styles.divsMyObjective}`}>
            <div className={`${styles.divsContainerIcons}`}>
              <Rocket size={40} />
            </div>
            <p className={`${styles.paragraphMyObjectives}`}>
              Focado em projetos práticos
            </p>
          </div>

          <div className={`${styles.divsMyObjective}`}>
            <div className={`${styles.divsContainerIcons}`}>
              <Heart size={40} />
            </div>
            <p className={`${styles.paragraphMyObjectives}`}>
              Apaixonado por código limpo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
