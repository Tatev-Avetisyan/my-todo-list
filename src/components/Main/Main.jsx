import TodoList from "./TodoList/TodoList";
import MainHead from "../Head/MainHead/MainHead";
import AddTodo from "./AddTodo/AddTodo";

import styles from "./main.module.scss";

const Main = () => {
  return (
    <main className={styles.mainWrapper}>
      <MainHead />
      <TodoList />
      <AddTodo />
    </main>
  );
};

export default Main;
