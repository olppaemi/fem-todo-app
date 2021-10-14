import { nanoid } from "nanoid";
import TodoType from "types/todo";
import { Action } from "./actions";

export type TodoState = {
  todos: TodoType[];
};

export const reducer = (state: TodoState, action: Action): TodoState => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nanoid(),
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: action.payload.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};
