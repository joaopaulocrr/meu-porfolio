import styles from "./Home.module.css";

import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import Courses from "../../components/courses/Courses";
import Contact from "../../components/contact/Contact";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";


const Home = () => {
  return (
   <>

    <Navbar />
   
     <main className={styles.main}>
   
      <div className= {styles.containerComponents}>
        <Hero id="hero"/>
        <About id="about" />
        <Projects id="projects" />
        <Courses id="courses" />
        <Contact id="contact" />
      </div>
    </main>

    <Footer />
   
   </>
  );
};

export default Home;
