import styles from "./input.module.scss";
import Button from "../../../shared/Button/Buttons";

const Input = () => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="Type text for search..."
      />
      <div>
        <Button context="All" className={styles.btnALL} />
        <Button context="Done" className={styles.btnDone} />
        <Button context="Important" className={styles.btnImportant} />
      </div>
    </div>
  );
};

export default Input;
