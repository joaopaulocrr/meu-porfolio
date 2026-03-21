import { SlSocialGithub } from "react-icons/sl";
import { ExternalLink } from "lucide-react";

import netflix from "../../assets/netflix.jpg";

import styles from "./Projects.module.css";

const Projects = ({ id }) => {
  return (
    <section id={id} className={`${styles.sectionProjects}`}>
      <h1 className={`${styles.h1Projects}`}>Meus Projetos</h1>
      <div className={`${styles.projectsContainer}`}>
        <div className={`${styles.divProject}`}>
          <div className={`${styles.divImgProject}`}>
            <img
              src={netflix}
              alt="Imagem do Projeto"
              className={`${styles.imgProject}`}
            />
          </div>

          <div className={`${styles.containerTextProject}`}>
            <h2>Crud de Projetos</h2>
            <p className={`${styles.paragraphProject}`}>
              Sistema de gerenciamento de projetos com crud completo.
            </p>
            <div className={`${styles.technologiesUsed}`}>
              <div className={`${styles.technology}`}>
                <span className={`${styles.spanTecnology}`}>React</span>
              </div>
              <div className={`${styles.technology}`}>
                <span className={`${styles.spanTecnology}`}>Styled Components</span>
              </div>
              <div className={`${styles.technology}`}>
                <span className={`${styles.spanTecnology}`}>TYpescript</span>
              </div>
            </div>
            <div className={`${styles.codigoOrDemo}`}>
              <div className={`${styles.codigo}`}>
                <SlSocialGithub />
                <a href="https://github.com/joaopaulocrr/crud-react-ts" target="_blank" rel="noopener noreferrer"><span>Código</span></a>
              </div>
              <div className={`${styles.demo}`}>
                <ExternalLink />
                <a href="https://crud-react-ts-seven.vercel.app" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.divProject}`}>
          <div className={`${styles.divImgProject}`}>
            <img
              src={netflix}
              alt="Imagem do Projeto"
              className={`${styles.imgProject}`}
            />
          </div>

          <div className={`${styles.containerTextProject}`}>
            <h2>Título do projeto</h2>
            <p className={`${styles.paragraphProject}`}>
              Descrição completa do projeto criado
            </p>
            <div className={`${styles.technologiesUsed}`}>
              <div className={`${styles.technology}`}>
                <span className={`${styles.spanTecnology}`}>Tecnologia</span>
              </div>
              <div className={`${styles.technology}`}>
                <span className={`${styles.spanTecnology}`}>Tecnologia</span>
              </div>
              <div className={`${styles.technology}`}>
                <span className={`${styles.spanTecnology}`}>Tecnologia</span>
              </div>
            </div>
            <div className={`${styles.codigoOrDemo}`}>
              <div className={`${styles.codigo}`}>
                <SlSocialGithub />
                <span>Código</span>
              </div>
              <div className={`${styles.demo}`}>
                <ExternalLink />
                <span>Demo</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.divProject}`}>
          <div className={`${styles.divImgProject}`}>
            <img
              src={netflix}
              alt="Imagem do Projeto"
              className={`${styles.imgProject}`}
            />
          </div>

          <div className={`${styles.containerTextProject}`}>
            <h2>Título do projeto</h2>
            <p className={`${styles.paragraphProject}`}>
              Descrição completa do projeto criado
            </p>
            <div className={`${styles.technologiesUsed}`}>
              <div className={`${styles.technology}`}>
                <span className={`${styles.spanTecnology}`}>Tecnologia</span>
              </div>
              <div className={`${styles.technology}`}>
                <span className={`${styles.spanTecnology}`}>Tecnologia</span>
              </div>
              <div className={`${styles.technology}`}>
                <span className={`${styles.spanTecnology}`}>Tecnologia</span>
              </div>
            </div>
            <div className={`${styles.codigoOrDemo}`}>
              <div className={`${styles.codigo}`}>
                <SlSocialGithub />
                <span>Código</span>
              </div>
              <div className={`${styles.demo}`}>
                <ExternalLink />
                <span>Demo</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.divProject}`}>
          <div className={`${styles.divImgProject}`}>
            <img
              src={netflix}
              alt="Imagem do Projeto"
              className={`${styles.imgProject}`}
            />
          </div>

          <div className={`${styles.containerTextProject}`}>
            <h2>Título do projeto</h2>
            <p className={`${styles.paragraphProject}`}>
              Descrição completa do projeto criado
            </p>
            <div className={`${styles.technologiesUsed}`}>
              <div className={`${styles.technology}`}>
                <span className={`${styles.spanTecnology}`}>Tecnologia</span>
              </div>
              <div className={`${styles.technology}`}>
                <span className={`${styles.spanTecnology}`}>Tecnologia</span>
              </div>
              <div className={`${styles.technology}`}>
                <span className={`${styles.spanTecnology}`}>Tecnologia</span>
              </div>
            </div>
            <div className={`${styles.codigoOrDemo}`}>
              <div className={`${styles.codigo}`}>
                <SlSocialGithub />
                <span>Código</span>
              </div>
              <div className={`${styles.demo}`}>
                <ExternalLink />
                <span>Demo</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.divProject}`}>
          <div className={`${styles.divImgProject}`}>
            <img
              src={netflix}
              alt="Imagem do Projeto"
              className={`${styles.imgProject}`}
            />
          </div>

          <div className={`${styles.containerTextProject}`}>
            <h2>Título do projeto</h2>
            <p className={`${styles.paragraphProject}`}>
              Descrição completa do projeto criado
            </p>
            <div className={`${styles.technologiesUsed}`}>
              <div className={`${styles.technology}`}>
                <span className={`${styles.spanTecnology}`}>Tecnologia</span>
              </div>
              <div className={`${styles.technology}`}>
                <span className={`${styles.spanTecnology}`}>Tecnologia</span>
              </div>
              <div className={`${styles.technology}`}>
                <span className={`${styles.spanTecnology}`}>Tecnologia</span>
              </div>
            </div>
            <div className={`${styles.codigoOrDemo}`}>
              <div className={`${styles.codigo}`}>
                <SlSocialGithub />
                <span>Código</span>
              </div>
              <div className={`${styles.demo}`}>
                <ExternalLink />
                <span>Demo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
