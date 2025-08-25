import styles from "./FooterInfo.module.css";

export const FooterInfo = () => {
  return (
    <footer className={styles.footer}>
      <small>
        Developed in Visual Studio Code by yours truly. Built with React.
        Deployed via Vercel.
      </small>
    </footer>
  );
};
