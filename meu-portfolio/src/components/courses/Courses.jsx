import styles from "./Courses.module.css";

const Courses = ({ id }) => {
  const cursos = [
    {
      name: "Javascript",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGvUEZdJAom44FinzfBXUmyKYkqrRyUAwiVg&s",
      autor: "Gustavo Guanabara",
    },
    {
      name: "React-Do Zero á Maestria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGvUEZdJAom44FinzfBXUmyKYkqrRyUAwiVg&s",
      autor: "Matheus Batisti",
    },
    {
      name: "Análise e Desenvolvimento de Sistemas",
      image:
        "https://unicorpfaculdades.edu.br/Arquivos/logogrupo_horizontal_laranja%20(2).png",
      autor: "Unicorp Faculdades",
    },
  ];

  return (
    <section id={id} className={`${styles.courses}`}>
      <h1 className={`${styles.h1Courses}`}>Meus cursos</h1>

      <div className={`${styles.containerCourses}`}>
        {cursos.map((curso, index) => (
          <div key={index} className={`${styles.divCourse}`}>
            <div
              className={`${styles.divImage} `}
            >
              <img
                src={curso.image}
                alt="Imagem da capa do curso"
                className={`${styles.imgCourse} ${
                curso.name === "Análise e Desenvolvimento de Sistemas"
                  ? styles.unicorp
                  : ""
              }`}
              />
            </div>
            <div className={`${styles.divText}`}>
              <h2 className={`${styles.nameCourse}`}>{curso.name}</h2>
              <p className={`${styles.paragraph}`}>{curso.autor}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
