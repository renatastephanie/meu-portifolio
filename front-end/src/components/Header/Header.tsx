import { useState, useEffect } from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  // O ESTADO COMEÇA COM 'true'
  const [isDarkMode, setIsDarkMode] = useState(true);

  // ESSE EFEITO MONITORA A VARIÁVEL 'isDarkMode' E ALTERA A CLASSE DO BODY
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  // FUNÇÃO QUE INVERTE O ESTADO DE VERDADEIRO PARA FALSO E VICE-VERSA
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <ul>
          <li>
            <a href="#video" className={styles.link}>
              <i className="fa-solid fa-house"></i>
            </a>
          </li>
          <li>
            <a href="#skills" className={styles.link}>
              <i className="fa-solid fa-brain"></i>
            </a>
          </li>
          <li>
            <a href="#formacao" className={styles.link}>
              <i className="fa-solid fa-graduation-cap"></i>
            </a>
          </li>
          <li>
            <a href="#projetos" className={styles.link}>
              <i className="fa-solid fa-trowel-bricks"></i>
            </a>
          </li>

          {/* BOTÃO DE ALTERNAÇÃO DE TEMA */}
          <li>
            <button
              onClick={toggleTheme}
              className={styles.themeBtn}
              aria-label="Alternar tema">
              {/* O ÍCONE MUDA DINAMICAMENTE: MOSTRA O SOL NO ESCURO E A LUA NO CLARO */}
              <i
                className={
                  isDarkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"
                }></i>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
