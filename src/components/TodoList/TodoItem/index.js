import React from "react";
import rem from "services/rem";
import styled from "styled-components";
import cross from "assets/icon-cross.svg";
import CheckCircle from "components/CheckCircle";

const RemoveBtn = styled.button`
  position: relative;
  width: 1rem;
  height: 1rem;
  text-indent: 9999px;
  overflow: hidden;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: auto;
`;

const Item = styled.div`
  width: 100%;
  height: ${rem(64)};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding-left: ${rem(24)};
  padding-right: ${rem(24)};

  &:hover {
    ${RemoveBtn}:before {
      display: block;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: ${rem(24)};
      height: ${rem(24)};
      background: no-repeat url(${cross});
      background-size: 60%;
    }
  }
`;
const Todo = styled.p`
  font-size: clamp(${rem(16)}, 2vw, ${rem(20)});
  color: ${({ completed, theme }) =>
    completed ? theme.textCompleted : theme.textActive};
  text-decoration: ${({ completed }) => completed && "line-through"};
  overflow: hidden;
  cursor: pointer;
  margin-left: ${rem(24)};
`;

const TodoItem = ({ todo, handleClick, handleRemove }) => {
  const { id, title, state } = todo;
  return (
    <Item completed={state === "Completed"}>
      <CheckCircle
        id={id}
        checked={state === "Completed"}
        handleClick={handleClick}
      />
      <Todo completed={state === "Completed"} onClick={() => handleClick(id)}>
        {title}
      </Todo>
      <RemoveBtn onClick={() => handleRemove(id)}>Remove</RemoveBtn>
    </Item>
  );
};

export default TodoItem;
