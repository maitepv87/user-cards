import styles from "./HeaderNav.module.css";

export const HeaderNav = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <form role="search" className={styles.search}>
          <input type="search" placeholder="Search..." aria-label="Search" />
        </form>

        <ul className={styles.links}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
