import Input from "../../../shared/Input/Input";
import Button from "../../../shared/Button/Buttons";

import styles from "./editTodo.module.scss";

const EditTodo = ({ value, initialTitle, onCancel, onChange, onEdit }) => {
  return (
    <div className={styles.editInputWrapper}>
      <Input
        className={styles.addInput}
        placeholder="Edit todo title..."
        value={value}
        onChange={onChange}
      />
      <div className={styles.buttonGroup}>
        <Button context="Save" className={styles.btnEdit} onClick={onEdit} />
        <Button
          context="Cancel"
          className={styles.btnCancel}
          onClick={onCancel}
        />
      </div>
    </div>
  );
};

export default EditTodo;
