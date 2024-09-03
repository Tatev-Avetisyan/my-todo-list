import styles from "./titleAndCount.module.scss";
import { useContext } from "react";
import { TodoContext } from "../../../context/TodoContext";

const Count = () => {
  const { todos } = useContext(TodoContext);

  const doneCount = todos.filter((todo) => todo.done).length;
  const importantCount = todos.filter((todo) => todo.important).length;

  return (
    <div className={styles.count}>
      <p>Done: {doneCount}</p>
      <p>Important: {importantCount}</p>
    </div>
  );
};

export default Count;
