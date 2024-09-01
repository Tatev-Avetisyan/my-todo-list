import { useState, useContext } from "react";
import Input from "../../../shared/Input/Input";
import Button from "../../../shared/Button/Buttons";
import { TodoContext } from "../../../context/TodoContext";

import styles from "./addTodo.module.scss";

const AddTodo = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const ctx = useContext(TodoContext);

  const handleAddTodo = () => {
    const trimmedTitle = todoTitle.trim();
    if (trimmedTitle !== "") {
      ctx.onAdd(trimmedTitle);
      setTodoTitle("");
    } else {
      alert("Please add a title for the new Todo");
    }
  };
  return (
    <div className={styles.addInputWrapper}>
      <Input
        className={styles.addInput}
        placeholder="Item text..."
        value={todoTitle}
        onChange={(e) => {
          console.log(e.target.value);
          setTodoTitle(e.target.value);
        }}
      />
      <Button
        context="Add item"
        className={styles.btnAdd}
        onClick={handleAddTodo}
      />
    </div>
  );
};

export default AddTodo;
