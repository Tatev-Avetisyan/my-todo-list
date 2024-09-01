export const ACTION_TYPES = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO",
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

export const deleteTodo = (id) => ({
  type: ACTION_TYPES.DELETE_TODO,
  payload: id,
});
