import styles from "./todoItem.module.scss";
import CheckIcon from "@mui/icons-material/Check";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import InfoIcon from "@mui/icons-material/Info";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

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
