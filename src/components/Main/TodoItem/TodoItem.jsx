import { useContext } from "react";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { TodoContext } from "../../../context/TodoContext";

import styles from "./todoItem.module.scss";

const TodoItem = ({ id, name, done, important }) => {
  const { onToggleDone, onToggleImportant, onDelete } = useContext(TodoContext);

  return (
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
        <button>
          <EditCalendarIcon />
        </button>
        <button onClick={() => onToggleDone(id)}>
          <DoneIcon />
        </button>
        <button onClick={() => onToggleImportant(id)}>
          <PriorityHighIcon />
        </button>
        <button onClick={() => onDelete(id)}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
