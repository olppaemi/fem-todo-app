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
    }
  | {
      type: "CLEAR_COMPLETED";
    };

const add = (text: string): Action => ({
  type: "ADD_TODO",
  payload: { text },
});

const remove = (id: string): Action => ({
  type: "REMOVE_TODO",
  payload: { id },
});

const update = (id: string, completed: boolean): Action => ({
  type: "UPDATE_TODO",
  payload: { id, completed },
});

const clear = (): Action => ({
  type: "CLEAR_COMPLETED",
});

export const todoActions = { add, remove, update, clear };
