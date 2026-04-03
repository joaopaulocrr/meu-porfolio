import { SlSocialGithub } from "react-icons/sl";
import { ExternalLink } from "lucide-react";

import { projetos } from "../../listProjects/projectsData";

import netflix from "../../assets/netflix.jpg";

import styles from "./Projects.module.css";
import H1Titlle from "../h1Titlle/H1Titlle";

const Projects = ({ id }) => {
  return (
    <section id={id} className={`${styles.sectionProjects}`}>
      <H1Titlle>Meus Projetos</H1Titlle>
      <div className={`${styles.projectsContainer}`}>

       {projetos.map((projeto) => (
        <div className={`${styles.divProject}`} key={projeto.id}>
          <div className={`${styles.divImgProject}`}>
            <img
              src={netflix}
              alt="Imagem do Projeto"
              className={`${styles.imgProject}`}
            />
          </div>

          <div className={`${styles.containerTextProject}`}>
            <h2>{projeto.nome}</h2>
            <p className={`${styles.paragraphProject}`}>
              {projeto.descricao}
            </p>
            <div className={`${styles.technologiesUsed}`}>
              {projeto.tecnologias.map((tecnologia, index) => (
                <div className={`${styles.technology}`} key={index}>
                  <span className={`${styles.spanTecnology}`}>{tecnologia}</span>
                </div>
              ))}
              
            </div>
            <div className={`${styles.codigoOrDemo}`}>
              <div className={`${styles.codigo}`}>
                <SlSocialGithub />
                <a href={projeto.urlCodigo} target="_blank" rel="noopener noreferrer"><span>Código</span></a>
              </div>
              <div className={`${styles.demo}`}>
                <ExternalLink />
                <a href={projeto.urlDemo} target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
              </div>
            </div>
          </div>
        </div>
       ))}
       
      </div>
    </section>
  );
};

export default Projects;
