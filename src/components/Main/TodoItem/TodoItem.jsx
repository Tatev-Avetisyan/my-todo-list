import { useContext, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import Edit from "../EditTodo/EditTodo";
import { TodoContext } from "../../../context/TodoContext";

import styles from "./todoItem.module.scss";

const TodoItem = ({ id, name, done, important }) => {
  const { onToggleDone, onToggleImportant, onDelete, onEdit } =
    useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(name);

  const onEditClickHandler = () => {
    setIsEditing(true);
  };

  const onSaveEditHandler = () => {
    if (editedTitle.trim() !== "") {
      onEdit(id, editedTitle.trim());
      setIsEditing(false);
    } else {
      alert("Todo title cannot be empty");
    }
  };

  const handleToggleImportant = () => {
    if (done) {
      alert("A done todo cannot be marked as important!");
      return;
    }
    onToggleImportant(id);
  };
  const handleToggleDone = () => {
    if (!done && important) {
      onToggleImportant(id);
    }
    onToggleDone(id);
  };
  return (
    <div className={styles.todoItemAndEditWrapper}>
      {isEditing ? (
        <Edit
          onEdit={onSaveEditHandler}
          onCancel={() => setIsEditing(false)}
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
      ) : (
        <div className={styles.todoItemWrapper}>
          <h3
            className={`${done ? styles.done : ""}`}
            style={{
              color: done ? "grey" : important ? "red" : "black",
              textDecoration: done ? "line-through" : "none",
            }}>
            {name}
          </h3>
          <div className={styles.iconsWrapper}>
            <button onClick={onEditClickHandler}>
              <EditCalendarIcon />
            </button>
            <button onClick={handleToggleDone}>
              <DoneIcon />
            </button>
            <button onClick={handleToggleImportant}>
              <PriorityHighIcon />
            </button>
            <button onClick={() => onDelete(id)}>
              <DeleteIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
