import { DragItem } from "types/DragItem";

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
    }
  | {
      type: "MOVE_TODO";
      payload: { draggedId: string; hoverId: string };
    }
  | {
      type: "SET_DRAGGED_ITEM";
      payload: { draggedItem: DragItem | null };
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

const move = (draggedId: string, hoverId: string): Action => ({
  type: "MOVE_TODO",
  payload: { draggedId, hoverId },
});

const setDraggedItem = (dragItem: DragItem | null): Action => ({
  type: "SET_DRAGGED_ITEM",
  payload: { draggedItem: dragItem },
});

export const todoActions = { add, remove, update, clear, move, setDraggedItem };
