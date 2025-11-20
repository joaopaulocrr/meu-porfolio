import { SlSocialGithub } from "react-icons/sl"
import {ExternalLink} from "lucide-react"

import netflix from "../../assets/netflix.jpg"

import styles from "./Projects.module.css"

const Projects = ({id}) => {
  return (
    <section id={id} className={`${styles.sectionProjects}`}>
      <h1 className={`${styles.h1Projects}`}>Meus Projetos</h1>
      <div className={`${styles.projectsContainer}`}>

        <div className={`${styles.divProject}`}>

          <div className={`${styles.divImgProject}`}> 
            <img src={netflix} alt="Imagem do Projeto" className={`${styles.imgProject}`}/>

          <div className={`${styles.divShaddow}`}>

          </div>
          </div>

          

          <div className={`${styles.containerTextProject}`}>
            <h2>Título do projeto</h2>
            <p className={`${styles.paragraphProject}`}>Descrição completa do projeto criado</p>
            <div className={`${styles.technologiesUsed}`}>
              <div className={`${styles.technology}`}>
                <span className={`${styles.spanTecnology}`}>HTML5</span>
              </div>
              <div className={`${styles.technology}`}>
                <span className={`${styles.spanTecnology}`}>CSS3</span>
              </div>
              <div className={`${styles.technology}`}>
                <span className={`${styles.spanTecnology}`}>Javascript</span>
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
            <img src={netflix} alt="Imagem do Projeto" className={`${styles.imgProject}`}/>

          </div>

          <div className={`${styles.containerTextProject}`}>
            <h2>Título do projeto</h2>
            <p className={`${styles.paragraphProject}`}>Descrição completa do projeto criado</p>
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
            <img src={netflix} alt="Imagem do Projeto" className={`${styles.imgProject}`}/>

          </div>

          <div className={`${styles.containerTextProject}`}>
            <h2>Título do projeto</h2>
            <p className={`${styles.paragraphProject}`}>Descrição completa do projeto criado</p>
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
            <img src={netflix} alt="Imagem do Projeto" className={`${styles.imgProject}`}/>

          </div>

          <div className={`${styles.containerTextProject}`}>
            <h2 >Título do projeto</h2>
            <p className={`${styles.paragraphProject}`}>Descrição completa do projeto criado</p>
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
            <img src={netflix} alt="Imagem do Projeto" className={`${styles.imgProject}`}/>

          </div>

          <div className={`${styles.containerTextProject}`}>
            <h2>Título do projeto</h2>
            <p className={`${styles.paragraphProject}`}>Descrição completa do projeto criado</p>
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
  )
}

export default Projects