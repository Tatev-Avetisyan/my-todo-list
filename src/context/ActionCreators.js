export const ACTION_TYPES = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO",
  TOGGLE_IMPORTANT_TODO: "TOGGLE_IMPORTANT_TODO",
};

// Action Creators
export const addTodo = (todoTitle) => ({
  type: ACTION_TYPES.ADD_TODO,
  payload: { todoTitle },
});

export const toggleTodo = (id) => ({
  type: ACTION_TYPES.TOGGLE_TODO,
  payload: id,
});

export const toggleImportant = (id) => ({
  type: ACTION_TYPES.TOGGLE_IMPORTANT_TODO,
  payload: id,
});

export const deleteTodo = (id) => ({
  type: ACTION_TYPES.DELETE_TODO,
  payload: id,
});

export const editTodo = (id, newTitle) => ({
  type: ACTION_TYPES.EDIT_TODO,
  payload: { id, newTitle },
});
