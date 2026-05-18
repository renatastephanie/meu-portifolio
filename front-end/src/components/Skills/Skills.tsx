import styles from "./Skills.module.scss";

// Definindo a tipagem de cada Skill para o TypeScript
interface ISkillItem {
  nome: string;
  porcentagem: number;
  icone: string;
}

const minhasSkills: ISkillItem[] = [
  { nome: "HTML5", porcentagem: 85, icone: "fa-brands fa-html5" },
  { nome: "CSS3", porcentagem: 85, icone: "fa-brands fa-css3-alt" },
  { nome: "JavaScript", porcentagem: 80, icone: "fa-solid fa-code" },
  { nome: "Comunicação", porcentagem: 90, icone: "fa-solid fa-comments" },
  {nome: "Trabalho em Equipe",porcentagem: 90,icone: "fa-solid fa-people-group",},
  { nome: "Adaptabilidade", porcentagem: 82, icone: "fa-solid fa-person-rays" },
  { nome: "Liderança", porcentagem: 78, icone: "fa-solid fa-award" },
];

export const Skills = () => {
  return (
    <article id="Skills">
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