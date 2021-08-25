import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoListContainer = styled.div`
  overflow: auto;
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
