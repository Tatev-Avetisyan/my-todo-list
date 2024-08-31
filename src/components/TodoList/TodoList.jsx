import styles from "./todoList.module.scss";
import TodoItem from "../TodoItem/TodoItem";

const todoNames = [
  "Learn JavaScript",
  "Read a book",
  "Go for a walk",
  "Work on a project",
  "Do the laundry",
];

const TodoList = () => {
  return (
    <section className={styles.todoListWrapper}>
      {todoNames.map((name, index) => {
        return <TodoItem name={name} key={index} />;
      })}
    </section>
  );
};

export default TodoList;
