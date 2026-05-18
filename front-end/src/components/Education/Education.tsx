import styles from "./Education.module.scss";

interface IEducationItem {
  periodo: string;
  instituicao: string;
  titulacao: string;
}

const meusCursos: IEducationItem[] = [
  {
    periodo: "1998 - 2000",
    instituicao: "Centro de Graduação de Professores",
    titulacao: "Licenciatura em Informática",
  },

  {
    periodo: "1995 - 2000",
    instituicao: "Centro de Graduação de Professores",
    titulacao: "Licenciatura em Informática",
  },

  {
    periodo: "1995 - 2000",
    instituicao: "Centro de Graduação de Professores",
    titulacao: "Licenciatura em Informática",
  },
];

export const Education = () => {
  return (
    <article id="formacao">
      <h2>
        <i className="fa-solid fa-graduation-cap"></i>
        Minha Formação
      </h2>

      <div className={styles.formacaoContainer}>
        {meusCursos.map((curso, index) => (
          <div className={styles.curso} key={index}>
            <p className={styles.periodo}>{curso.periodo}</p>
            <h3 className={styles.instituicao}>{curso.instituicao}</h3>
            <p className={styles.titulacao}>{curso.titulacao}</p>
          </div>
        ))}
      </div>
    </article>
  );
};
