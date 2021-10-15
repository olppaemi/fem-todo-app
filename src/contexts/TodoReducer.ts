import { nanoid } from "nanoid";
import { DragItem } from "types/DragItem";
import TodoType from "types/todo";
import { findItemIndexById, moveItem } from "utils/arrayUtils";
import { Action } from "./actions";

export type TodosState = {
  draggedItem: DragItem | null;
  todos: TodoType[];
};

export const reducer = (state: TodosState, action: Action): TodosState => {
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
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };
    case "MOVE_TODO":
      const { draggedId, hoverId } = action.payload;
      const dragIndex = findItemIndexById(state.todos, draggedId);
      const hoverIndex = findItemIndexById(state.todos, hoverId);
      return {
        ...state,
        todos: moveItem(state.todos, dragIndex, hoverIndex),
      };
    case "SET_DRAGGED_ITEM":
      return {
        ...state,
        draggedItem: action.payload.draggedItem,
      };
    default:
      return state;
  }
};
