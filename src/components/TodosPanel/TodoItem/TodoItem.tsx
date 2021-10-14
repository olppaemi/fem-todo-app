import { todoActions } from "context/actions";
import { useTodoContext } from "context/TodoContext";
import CheckIcon from "icons/CheckIcon";
import CrossIcon from "icons/CrossIcon";
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
  const { dispatch } = useTodoContext();

  const checkTodo = () => dispatch(todoActions.update(id, !completed));
  const removeTodo = () => dispatch(todoActions.remove(id));

  return (
    <S.TodoItem>
      <S.CheckButton type="button">
        <S.Circle $completed={completed} onClick={checkTodo}>
          <S.CircleBackground $completed={completed}>
            {completed && <CheckIcon />}
          </S.CircleBackground>
        </S.Circle>
      </S.CheckButton>
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
