import { createContext, useReducer, useState, useCallback } from "react";
import { todoReducer } from "./TodoReducer";
import {
  addTodo,
  toggleTodo,
  toggleImportant,
  deleteTodo,
  editTodo,
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
  filteredTodos: [],
  onAdd: () => {},
  onDelete: () => {},
  onToggleDone: () => {},
  onToggleImportant: () => {},
  onEdit: () => {},
  onSearch: () => {},
  setFilter: () => {},
});

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodoList);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleEdit = useCallback((id, newTitle) => {
    dispatch(editTodo(id, newTitle));
  }, []);

  const filteredTodos = todos.filter((todo) => {
    let matchesFilter = true;
    if (filter === "Done") {
      matchesFilter = todo.done;
    } else if (filter === "Important") {
      matchesFilter = todo.important;
    }
    return (
      matchesFilter &&
      todo.todoTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSetFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        filteredTodos,
        onAdd: handleAdd,
        onDelete: handleDelete,
        onToggleDone: handleToggleDone,
        onToggleImportant: handleToggleImportant,
        onEdit: handleEdit,
        onSearch: handleSearch,
        setFilter: handleSetFilter,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
