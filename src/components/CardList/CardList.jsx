import { Card } from "..";
import styles from "./CardList.module.css";

export const CardList = ({ users }) => {
  return (
    <main className={styles.main}>
      <div className={styles.headerRow}>
        <h2>User Directory</h2>
      </div>

      <ul className={styles.cardGrid}>
        {users.map((user) => (
          <li key={user.id}>
            <Card
              name={user.name}
              age={user.age}
              profession={user.profession}
              avatar={user.avatar}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};
