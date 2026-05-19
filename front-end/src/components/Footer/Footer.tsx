import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      Portifólio Desenvolvido por {" "}
      <a
        href="//www.linkedin.com/in/renata-stephanie/"
        target="_blank"
        rel="noopener noreferrer">
        Renata Stephanie
      </a>
      {" "} em 2026
    </footer>
  );
};
