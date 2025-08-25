import { createPortal } from "react-dom";
import { useFormReducer } from "../../hooks/useFormReducer";
import styles from "./EditModal.module.css";

export const EditModal = ({ show, onHide, initialForm }) => {
  const { state, onChange, onReset } = useFormReducer(initialForm);

  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    onHide();
    onReset();
  };

  const handleClose = () => {
    onReset();
    onHide();
  };

  const modalContent = (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onHide}>
          ×
        </button>

        <h3>Edit User</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={state.name}
              onChange={onChange}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="age" className={styles.label}>
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={state.age}
              onChange={onChange}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="profession" className={styles.label}>
              Profession
            </label>
            <input
              type="text"
              id="profession"
              name="profession"
              value={state.profession}
              onChange={onChange}
              className={styles.input}
            />
          </div>

          <div className={styles.actions}>
            <button type="submit">Save</button>
            <button type="button" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
