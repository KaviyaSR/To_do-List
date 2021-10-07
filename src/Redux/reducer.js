import * as types from "./actiontype";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [{ id: 1, task: "breakfast", completed: false }],
};
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: uuidv4(),
        task: action.payload,
        completed: false,
      };

      const addedTodo = [...state.todos, newTodo];
      return {
        ...state,
        todos: addedTodo,
      };

    case "DELETE_TODO":
      const filterTodo = state.todos.filter((t) => t.id !== action.payload.id);
      return {
        ...state,
        todos: filterTodo,
      };
    case "COMPLETE_TODO":
      const toggleTodo = state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...action.payload, completed: !action.payload.completed }
          : t
      );
      return {
        ...state,
        todos: toggleTodo,
      };
    default:
      return state;
  }
};

export default todosReducer;
