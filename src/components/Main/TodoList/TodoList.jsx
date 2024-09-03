import { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { TodoContext } from "../../../context/TodoContext";

import styles from "./todoList.module.scss";

const TodoList = () => {
  const { filteredTodos } = useContext(TodoContext);

  return (
    <section className={styles.todoListWrapper}>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          name={todo.todoTitle}
          done={todo.done}
          important={todo.important}
        />
      ))}
    </section>
  );
};
export default TodoList;
