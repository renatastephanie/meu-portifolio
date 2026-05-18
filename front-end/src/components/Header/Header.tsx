import styles from "./Header.module.scss";

export const Header = () => {
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
          <li>
            <a href="#" className={styles.link} id="botao-tema">
              <i className="fa-solid fa-moon"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
