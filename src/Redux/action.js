import * as types from "./actiontype";

export const completeTodo = (todo) => ({
  type: "COMPLETE_TODO",
  payload: todo,
});

export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const deleteTodo = (todo) => ({
  type: "DELETE_TODO",
  payload: todo,
});
