import { useState } from "react";
import { EditModal } from "../EditModal/EditModal";
import styles from "./Card.module.css";

export const Card = ({ name, age, profession, avatar }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <article className={styles.card}>
        <img src={avatar} alt={`${name}'s avatar`} className={styles.avatar} />

        <div className={styles.cardBody}>
          <h5>{name}</h5>
          <p>Age: {age}</p>
          <p>Profession: {profession}</p>
        </div>

        <div className={styles.actions}>
          <button type="button" onClick={handleShow}>
            Edit
          </button>
        </div>
      </article>

      <EditModal
        show={show}
        onHide={handleClose}
        initialForm={{ name, age, profession }}
      />
    </>
  );
};
