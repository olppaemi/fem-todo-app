import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoListContainer = styled.div`
  overflow: auto;
`;

const TodoList = ({ todos, handleClick, handleRemove }) => {
  return (
    <TodoListContainer>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          handleClick={handleClick}
          handleRemove={handleRemove}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
