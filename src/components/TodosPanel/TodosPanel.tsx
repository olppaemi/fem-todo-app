import { useTodoContext } from "contexts/TodoContext";
import TodoItem from "./TodoItem";
import * as S from "./styles";
import TodosControl from "./TodosControl";
import { useState } from "react";

const TodosPanel = () => {
  const { todos } = useTodoContext();
  const [filter, setFilter] = useState<"" | "active" | "completed">("");
  const todosLeft = todos.reduce(
    (acc, todo) => (!todo.completed ? acc + 1 : acc),
    0
  );

  const renderTodos = () => {
    if (!filter) {
      return todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
        />
      ));
    } else if (filter === "active") {
      return todos.map(
        (todo) =>
          !todo.completed && (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
            />
          )
      );
    } else {
      return todos.map(
        (todo) =>
          todo.completed && (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
            />
          )
      );
    }
  };

  return (
    <S.TodosPanel>
      <S.Todos>{renderTodos()}</S.Todos>
      <TodosControl
        todosLeft={todosLeft}
        filter={filter}
        setFilter={setFilter}
      />
    </S.TodosPanel>
  );
};

export default TodosPanel;
