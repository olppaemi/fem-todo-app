import { createContext, Dispatch, FC, useContext, useReducer } from "react";
import TodoType from "types/todo";
import { Action } from "./actions";
import { reducer, TodoState } from "./TodoReducer";

const todoData: TodoState = {
  todos: [
    {
      id: "1",
      text: "Complete online JavaScript course",
      completed: true,
    },
    {
      id: "2",
      text: "Jog around the park 3x",
      completed: false,
    },
    {
      id: "3",
      text: "10 minutes meditation",
      completed: false,
    },
    {
      id: "4",
      text: "Read for 1 hour",
      completed: false,
    },
    {
      id: "5",
      text: "Pick up groceries",
      completed: false,
    },
    {
      id: "6",
      text: "Complete Todo App on Frontend Mentor",
      completed: false,
    },
  ],
};

export type TodoContextProps = {
  todos: TodoType[];
  dispatch: Dispatch<Action>;
};

const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

export const TodoContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, todoData);
  const { todos } = state;

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
