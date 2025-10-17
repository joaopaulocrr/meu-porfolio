import {CodeXml} from "lucide-react"

import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section>
        <div className={styles.divCodeXml}>
            <CodeXml size={150} color="#22D3EE"/>
        </div>
        <h1>
            <span className={styles.h1SpanGradient}>Desenvolvedor</span> 
            <span className={styles.h1Span}> Frontend</span>
        </h1>
        <p>Transformando idéias em experiências digitais incríveis</p>
        <div className="buttonsContainer">
            <button>
                Entre em contato
            </button>
            <button>
                Download CV
            </button>
        </div>
        <div className="iconsContainer">
            
        </div>
    </section>
  )
}

export default Hero