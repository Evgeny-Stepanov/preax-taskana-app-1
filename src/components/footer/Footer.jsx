import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>Проект выполнен в рамках стажировки</span>&nbsp;
      <a
        href="https://preax.ru"
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
        lang="en"
      >
        PREAX
      </a>
    </footer>
  );
};
