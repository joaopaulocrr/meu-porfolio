import H1Titlle from "../h1Titlle/H1Titlle";
import styles from "./Contact.module.css";

import { Mail, PhoneCall, MapPin } from "lucide-react";

const Contact = ({ id }) => {
  return (
    <section id={id} className={`${styles.sectionContact}`}>
      <div className={`${styles.containerContact}`}>
        <H1Titlle>Entre em Contato</H1Titlle>
        <p className={styles.paragraphContact}>
          Vamos trabalhar juntos? Envie uma mensagem!
        </p>
        <div className={` ${styles.containerFormAndInformation}`}>
          <div
            className={` ${styles.containerInformationAndParagraph} `}
          >
           
           <div className={styles.containerInformations}>
             <div className={`${styles.informations}`}>

              <h2 className={styles.titleInformations}>Informações</h2>
              <div className={`${styles.divsInformations} ${styles.myEmail}`}>
                <div className={`${styles.lucideComponent}`}>
                  <Mail />
                </div>
                <p className={styles.breakWord}>paulocorrentinense@gmail.com</p>
              </div>
              <div
                className={`${styles.divsInformations} ${styles.myNumberPhone}`}
              >
                <div className={`${styles.lucideComponent}`}>
                  <PhoneCall />
                </div>
                <p>+55 77 98807-2266</p>
              </div>
              <div className={`${styles.divsInformations} ${styles.state}`}>
                <div className={`${styles.lucideComponent}`}>
                  <MapPin />
                </div>
                <p>São Paulo, Brasil</p>
              </div>


            </div>
           </div>
            
            <div className={`${styles.paragraphText}`}>
              <p>
                "Sempre disponível para novos desafios e oportunidades de
                aprendizado"
              </p>
            </div>
          </div>

          <div
            className={`${styles.stylesFormAndInformation} ${styles.containerForm}`}
          >
            <form className={styles.form}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Seu Nome"
                required
                className={`${styles.inputAreaStyles}`}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Seu Email"
                required
                className={`${styles.inputAreaStyles}`}
              />
              <input
                type="text"
                name="assunto"
                id="assunto"
                placeholder="Assunto"
                required
                className={`${styles.inputAreaStyles}`}
              />
              <textarea
                name="message"
                id="message"
                placeholder="Sua Mensagem"
                required
                rows={10}
                className={`${styles.inputAreaStyles}`}
              ></textarea>

              <button className={styles.sendButton}>Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
