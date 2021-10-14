export type Action =
  | {
      type: "ADD_TODO";
      payload: { text: string };
    }
  | {
      type: "REMOVE_TODO";
      payload: { id: string };
    }
  | {
      type: "UPDATE_TODO";
      payload: { id: string; completed: boolean };
    };

export const addTodo = (text: string): Action => ({
  type: "ADD_TODO",
  payload: { text },
});

export const removeTodo = (id: string): Action => ({
  type: "REMOVE_TODO",
  payload: { id },
});

export const updateTodo = (id: string, completed: boolean): Action => ({
  type: "UPDATE_TODO",
  payload: { id, completed },
});
