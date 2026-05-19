import styles from "./Skills.module.scss";

// Definindo a tipagem de cada Skill para o TypeScript
interface ISkillItem {
  nome: string;
  porcentagem: number;
  icone: string;
}

const minhasSkills: ISkillItem[] = [
  { nome: "HTML", porcentagem: 70, icone: "fa-brands fa-html5" },
  { nome: "CSS", porcentagem: 70, icone: "fa-brands fa-css" },
  { nome: "JavaScript", porcentagem: 70, icone: "fa-solid fa-code" },
  { nome: "React.Js", porcentagem: 60, icone: "fa-brands fa-react" },
  { nome: "Node.Js", porcentagem: 78, icone: "fa-brands fa-node-js" },
  { nome: "Python", porcentagem: 42, icone: "fa-brands fa-python" },
  {nome: "Trabalho em Equipe",porcentagem: 90,icone: "fa-solid fa-people-group",},
];

export const Skills = () => {
  return (
    <article id="skills">
      <h2>
        <i className="fa-solid fa-brain"></i>
        Minhas Skills
      </h2>

      <div className={styles.skillsContainer}>
        {minhasSkills.map((skill, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.info}>
              <span className={styles.nome}>
                <i className={skill.icone}></i>
                {skill.nome}
              </span>

              <span className={styles.porcent}>{skill.porcentagem}%</span>
            </div>

            <div className={styles.barra}>
              <div
                className={styles.progress}
                style={{ width: `${skill.porcentagem}%` }}>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}