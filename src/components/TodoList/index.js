import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import rem from "services/rem";

const TodoListContainer = styled.div`
  overflow: auto;
  max-height: ${rem(400)};
`;

const TodoList = ({ todos, handleClick, handleRemove }) => {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleClick={handleClick}
          handleRemove={handleRemove}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
