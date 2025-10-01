import styles from "./NotFound.module.css"

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>ERRO 404!</h1>
      <h2>Página não encontrada!</h2>
    </div>
  )
}

export default NotFound