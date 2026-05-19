import styles from "./Projects.module.scss";

// IMPORT DAS IMAGENS DOS PROJETOS
import todoList from "../../assets/TODO-list-react.png";
import climaTempo from "../../assets/clima-tempo.png";
import detonaRalph from "../../assets/detona-ralph.png";
import geradorSenha from "../../assets/gerador-de-senha.png";
import dragonBall from "../../assets/dragon-ball.png";
import cordel from "../../assets/cordel.png";
import landingReceita from "../../assets/landing-page-receita.png";
import verificadorIdade from "../../assets/verificador-idade.png";
import groupAgencia from "../../assets/group-agencia.png";
import calculadoraChurrasco from "../../assets/calculadora-churrasco.png";
import starbucks from "../../assets/starbucks.png";

interface IProjectItem {
  ano: string;
  titulo: string;
  subtitulo?: string;
  descricao?: string;
  imagem: string;
  repositorio: string;
}

const meusProjetos: IProjectItem[] = [
  {
    ano: "2026",
    titulo: "TODO List Full Stack",
    subtitulo: "Projeto construído para treinar Aplicações em React",
    descricao:
      "Aplicação de gerenciamento de tarefas desenvolvida com uma arquitetura moderna, utilizando React no front-end, Node.js no back-end e persistência robusta em banco de dados PostgreSQL.",
    imagem: todoList,
    repositorio: "https://github.com/renatastephanie/todo-list-react",
  },

  {
    ano: "2025",
    titulo: "Clima Tempo",
    subtitulo: "Projeto construído para treinar o consumo de APIs",
    descricao:
      "Projeto simples que permite ao usuário consultar o clima atual de uma cidade. Ele exibe a temperatura atual em graus Celsius utilizando a OpenWeatherMap API",
    imagem: climaTempo,
    repositorio: "https://github.com/renatastephanie/clima-tempo",
  },

  {
    ano: "2025",
    titulo: "Jogo Detona Ralph",
    descricao:
      "Este é um jogo simples, no estilo Whac-a-Mole, inspirado no filme Detona Ralph. O objetivo do jogo é clicar nos quadrados onde o Ralph aparece para marcar pontos antes que o tempo acabe.",
    imagem: detonaRalph,
    repositorio: "https://github.com/renatastephanie/detona-ralph-jogo",
  },

  {
    ano: "2025",
    titulo: "Gerador de Senhas",
    descricao:
      "Um gerador de senhas moderno, responsivo e personalizável, feito com HTML, CSS e JavaScript",
    imagem: geradorSenha,
    repositorio: "https://github.com/renatastephanie/gerador_de_senhas",
  },

  {
    ano: "2025",
    titulo: "Projeto Dragon Ball",
    descricao:
      "Este projeto é uma reprodução simples de uma página do dragon ball z, feita com HTML, CSS e JavaScript apenas.",
    imagem: dragonBall,
    repositorio: "https://github.com/renatastephanie/projeto_dragonball",
  },

  {
    ano: "2025",
    titulo: "Cordel Moderno",
    descricao: "Projeto feito para treino do efeito paralax",
    imagem: cordel,
    repositorio: "https://github.com/renatastephanie/projeto_dragonball",
  },

  {
    ano: "2025",
    titulo: "Lading Page de Receita",
    descricao:
      "Esta landing page foi desenvolvida como parte de um desafio de front-end, com o objetivo de praticar e aprimorar habilidades em HTML e CSS. O projeto apresenta uma receita de omelete simples, com um layout responsivo e visual agradável, inspirado em designs modernos.",
    imagem: landingReceita,
    repositorio: "https://github.com/renatastephanie/landing_page_receita",
  },

  {
    ano: "2025",
    titulo: "Verificador de Idade",
    descricao:
      "Um simples projeto em HTML, CSS e JavaScript que permite ao usuário verificar a sua idade com base no ano de nascimento e selecionar o gênero. O resultado é exibido dinamicamente na página.",
    imagem: verificadorIdade,
    repositorio: "https://github.com/renatastephanie/verificador_de_idade",
  },

  {
    ano: "2024",
    titulo: "Projeto Grupo One - Agência de Intercâmbio",
    subtitulo: "Projeto Educacional do Curso Proz",
    descricao:
      "Projeto educacional do curso Proz feito em grupo com o intuito de aplicar os conhecimentos adquiridos durante o curso.",
    imagem: groupAgencia,
    repositorio: "https://github.com/renatastephanie/Proz---Grupo-1---TC-38",
  },

  {
    ano: "2024",
    titulo: "Calculadora de Churrasco",
    subtitulo: "Projeto Educacional da Faculdade",
    descricao:
      "Projeto desenvolvido como parte de um trabalho universitário. A Calculadora de Churrasco ajuda a estimar as quantidades necessárias de alimentos e bebidas para um churrasco, com base no número de homens, mulheres e crianças presentes.",
    imagem: calculadoraChurrasco,
    repositorio:
      "https://github.com/renatastephanie/calculadora_para_churrasco",
  },

  {
    ano: "2024",
    titulo: "Starbucks Landing Page",
    descricao:
      "Este projeto é uma recriação da página inicial do site do Starbucks, com foco na apresentação visual de produtos e uma pequena interação para trocar a imagem e o fundo do copo da Starbucks.",
    imagem: starbucks,
    repositorio: "https://github.com/renatastephanie/projeto_starbucks",
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
              <a
                href={projeto.repositorio}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}>
                <i className="fa-solid fa-link"></i> Ver Projeto
              </a>
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
