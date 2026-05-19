import styles from "./ProfileCard.module.scss";

export const ProfileCard = () => {
  return (
    <section  className={styles.ficha}>
      <img
        src="./src/assets/guanabara-perfil.jpg"
        alt="Foto de Perfil"
        className={styles.foto}
      />

      <h1>Gustavo Guanabara</h1>

      <p>
        Formado em Ciência da computação, com especialização em docência
        superior, desenvolvimento web e Inteligência Artificial. Apaixonado por
        tecnologia e sempre em busca de novos desafios. Atualmente, atuo como
        professor e desenvolvedor, compartilhando conhecimento através de cursos
        online e projetos de código aberto.
      </p>

      <div className={styles.social}>
        <a
          href="https://github.com/renatastephanie"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/renata-stephanie/"
          target="_blank"
          rel="noopener noreferrer">
          {" "}
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a
          href="https://www.instagram.com/renatastephanie_/"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </section>
  );
};
