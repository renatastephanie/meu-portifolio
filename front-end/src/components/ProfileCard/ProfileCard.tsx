import styles from "./ProfileCard.module.scss";

export const ProfileCard = () => {
  return (
    <section className={styles.ficha}>
      <img
        src="./src/assets/renata-perfil.jpg"
        alt="Foto de Perfil"
        className={styles.foto}
      />

      <h1>Renata Stephanie</h1>

      <p>
        Desenvolvedora Junior, fã de tecnologia, graduada em Análise e
        Desenvolvimento de Sistemas e recém formada em Desenvolvimento de
        Aplicações Móveis. Tenho experiência em suporte técnico, base em HTML,
        CSS, JavaScript e atualmente aprendendo a mexer com React.js, Node.js e
        Python. Busco constantemente aprimorar minhas habilidades técnicas e
        interpessoais, com objetivo de contribuir em projetos reais e soluções
        tecnológicas. Tenho entusiasmo por aprendizado contínuo e por colaborar em
        equipes que unem tecnologia, criatividade e propósito. Sou musicista as vezes e gamer nas horas vagas.
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

        {/* <a
          href="https://www.instagram.com/renatastephanie_/"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a> */}
      </div>
    </section>
  );
};
