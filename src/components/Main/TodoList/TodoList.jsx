import { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { TodoContext } from "../../../context/TodoContext";

import styles from "./todoList.module.scss";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <section className={styles.todoListWrapper}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} name={todo.todoTitle} />
      ))}
    </section>
  );
};

export default TodoList;
