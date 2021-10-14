import { todoActions } from "context/actions";
import { useTodoContext } from "context/TodoContext";
import * as S from "./styles";

const TodosControl = ({
  todosLeft,
  filter,
  setFilter,
}: {
  todosLeft: number;
  filter: "" | "active" | "completed";
  setFilter(filter: "" | "active" | "completed"): void;
}) => {
  const { dispatch } = useTodoContext();

  return (
    <S.TodosControl>
      {todosLeft} items left
      <S.Controls>
        <S.Button onClick={() => setFilter("")} $selected={filter === ""}>
          All
        </S.Button>
        <S.Button
          onClick={() => setFilter("active")}
          $selected={filter === "active"}
        >
          Active
        </S.Button>
        <S.Button
          onClick={() => setFilter("completed")}
          $selected={filter === "completed"}
        >
          Completed
        </S.Button>
      </S.Controls>
      <S.ClearButton onClick={() => dispatch(todoActions.clear())}>
        Clear Completed
      </S.ClearButton>
    </S.TodosControl>
  );
};

export default TodosControl;
