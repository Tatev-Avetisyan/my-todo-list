import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

import styles from "./todoItem.module.scss";

const TodoItem = ({ name }) => {
  return (
    <div className={styles.todoItemWrapper}>
      <h3>{name}</h3>
      <div className={styles.iconsWrapper}>
        <button>
          <EditCalendarIcon />
        </button>
        <button>
          <DoneIcon />
        </button>
        <button>
          <PriorityHighIcon />
        </button>
        <button>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
