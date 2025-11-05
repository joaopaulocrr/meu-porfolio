import styles from "./Courses.module.css"

const Courses = ({id}) => {

  const cursos = [
    {
      name: 'Javascript',
      image: "",
      autor: "Gustavo Guanabara",
    }, 
    {
      name: 'React-Do Zero á Maestria',
      image: '',
      autor: 'Matheus Batisti'
    },
    {
      name: 'Análise e Desenvolvimento de Sistemas',
      image: '',
      autor: 'Unicorp Faculdades'
    }
  ]

  return (
    <section id={id} className={`${styles.courses}`}>
      <h1 className={`${styles.h1Courses}`}>Meus cursos</h1>

      <div className={`${styles.containerCourses}`}>
          {cursos.map((curso) => (
            <div className={`${styles.divCourse}`}>
              <h1>{curso.name}</h1>
              <img src={curso.image} alt="Imagem da capa do curso" />
              <p>{curso.autor}</p>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Courses