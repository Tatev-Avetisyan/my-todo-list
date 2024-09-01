import { ACTION_TYPES } from "./ActionCreators";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return [
        ...state,
        {
          id: Math.random(),
          todoTitle: action.payload.todoTitle,
          done: false,
          important: false,
        },
      ];
    case ACTION_TYPES.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case ACTION_TYPES.TOGGLE_IMPORTANT_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, important: !todo.important }
          : todo
      );
    case ACTION_TYPES.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
