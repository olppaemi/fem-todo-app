import { todoActions } from "contexts/actions";
import { useTodoContext } from "contexts/TodoContext";
import CheckIcon from "icons/CheckIcon";
import CrossIcon from "icons/CrossIcon";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { DragItem } from "types/DragItem";
import * as S from "./styles";

const TodoItem = ({
  id,
  text,
  completed,
}: {
  id: string;
  text: string;
  completed: boolean;
}) => {
  const { draggedItem, dispatch } = useTodoContext();
  const ref = useRef<HTMLDivElement>(null);

  const checkTodo = () => dispatch(todoActions.update(id, !completed));
  const removeTodo = () => dispatch(todoActions.remove(id));
  const setDraggedItem = (dragItem: DragItem | null) =>
    dispatch(todoActions.setDraggedItem(dragItem));
  const moveDraggedItem = () => dispatch(todoActions.move(draggedItem!.id, id));

  const [, drag] = useDrag({
    type: "TODO",
    item: () => {
      const item: DragItem = { type: "TODO", id, text };
      setDraggedItem(item);
      return item;
    },
    end: () => setDraggedItem(null),
  });
  const [, drop] = useDrop({
    accept: "TODO",
    hover() {
      if (!draggedItem) return;
      if (draggedItem.id === id) return;
      moveDraggedItem();
    },
  });

  drag(drop(ref));

  return (
    <S.TodoItem ref={ref}>
      <S.CircleWrapper>
        <S.Circle $completed={completed} onClick={checkTodo}>
          <S.CircleButton $completed={completed}>
            {completed && <CheckIcon />}
          </S.CircleButton>
        </S.Circle>
      </S.CircleWrapper>
      <S.Text $completed={completed} onClick={checkTodo}>
        {text}
      </S.Text>
      <S.RemoveButton type="button" onClick={removeTodo}>
        <CrossIcon />
      </S.RemoveButton>
    </S.TodoItem>
  );
};

export default TodoItem;
