import { createContext, useReducer, useCallback } from "react";
import { todoReducer } from "./TodoReducer";
import { addTodo } from "./ActionCreators";

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
});

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodoList);

  const handleAdd = useCallback((todoTitle) => {
    dispatch(addTodo(todoTitle));
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos: todos,
        onAdd: handleAdd,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
