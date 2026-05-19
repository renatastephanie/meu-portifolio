import styles from "./Projects.module.scss";

interface IProjectItem {
  ano: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  imagem: string;
}

const meusProjetos: IProjectItem[] = [
  {
    ano: "2023",
    titulo: "Projeto Android",
    subtitulo: "Projeto construído para treinar conteúdos e imagens dinâmicas",
    descricao: "bla bla bla",
    imagem: "src/assets/projeto-03-android.jpg",
  },

  {
    ano: "2023",
    titulo: "Projeto Cordel",
    subtitulo: "Projeto construido para treinar efeito parallax em imagens",
    descricao: "Bla bla bla",
    imagem: "src/assets/projeto-02-cordel.jpg",
  },

  {
    ano: "2022",
    titulo: "Projeto Videos",
    subtitulo: "Projeto para treinar a inserção de videos em nosso Site",
    descricao: "bla bla bla",
    imagem: "src/assets/projeto-01-videos.jpg",
  },
];

export const Projects = () => {
  return (
    <article id="projetos">
      <h2>
        <i className="fa-solid fa-trowel-bricks"></i>
        Projetos
      </h2>

      <div className={styles.projetoContainer}>
        {meusProjetos.map((projeto, index) => (
          <div className={styles.projeto} key={index}>
            <img
              src={projeto.imagem}
              alt={projeto.titulo}
              className={styles.foto}
            />

            <div className={styles.projetoInfo}>
              <p className={styles.periodo}>{projeto.ano}</p>
              <h3 className={styles.titulo}>{projeto.titulo}</h3>
              <p>{projeto.subtitulo}</p>
            </div>

            <details className={styles.descricao}>
              <summary>Saiba mais..</summary>
              <p>{projeto.descricao}</p>
            </details>
          </div>
        ))}
      </div>
    </article>
  );
};
