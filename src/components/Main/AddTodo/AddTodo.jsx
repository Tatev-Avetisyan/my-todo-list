import styles from "./addTodo.module.scss";
import Input from "../../../shared/Input/Input";
import Button from "../../../shared/Button/Buttons";

const AddTodo = () => {
  return (
    <div className={styles.addInputWrapper}>
      <Input className={styles.addInput} placeholder="Item text..." />
      <Button context="Add item" className={styles.btnAdd} />
    </div>
  );
};

export default AddTodo;
