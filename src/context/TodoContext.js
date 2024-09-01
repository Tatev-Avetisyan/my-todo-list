import { createContext, useReducer, useCallback } from "react";
import { todoReducer } from "./TodoReducer";
import {
  addTodo,
  toggleTodo,
  toggleImportant,
  deleteTodo,
} from "./ActionCreators";

const initialTodoList = [
  { id: 1, todoTitle: "Learn JS", done: false, important: false },
  { id: 2, todoTitle: "Drink Coffee", done: true, important: false },
  { id: 3, todoTitle: "Learn React", done: false, important: false },
  { id: 4, todoTitle: "Learn TypeScript", done: false, important: true },
  { id: 5, todoTitle: "Learn Node.js", done: true, important: false },
];

const TodoContext = createContext({
  todos: [],
  onAdd: () => {},
  onDelete: () => {},
  onToggleDone: () => {},
  onToggleImportant: () => {},
});

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodoList);

  const handleAdd = useCallback((todoTitle) => {
    dispatch(addTodo(todoTitle));
  }, []);

  const handleToggleDone = useCallback((id) => {
    dispatch(toggleTodo(id));
  }, []);

  const handleToggleImportant = useCallback((id) => {
    dispatch(toggleImportant(id));
  }, []);

  const handleDelete = useCallback((id) => {
    dispatch(deleteTodo(id));
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos: todos,
        onAdd: handleAdd,
        onDelete: handleDelete,
        onToggleDone: handleToggleDone,
        onToggleImportant: handleToggleImportant,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
