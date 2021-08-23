import React from "react";
import rem from "services/rem";
import styled from "styled-components";
import check from "assets/icon-check.svg";
import cross from "assets/icon-cross.svg";

const RemoveBtn = styled.button`
  position: relative;
  width: 1rem;
  height: 1rem;
  text-indent: 9999px;
  overflow: hidden;
  background: transparent;
  border: none;
  cursor: pointer;

  /* &:before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${rem(24)};
    height: ${rem(24)};
    background: no-repeat url(${cross});
    background-size: 60%;
  } */
`;

const Item = styled.div`
  width: 100%;
  height: ${rem(64)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  position: relative;
  padding-left: ${rem(68)};
  padding-right: ${rem(24)};

  &::before {
    display: inline-block;
    content: "";
    width: ${rem(24)};
    height: ${rem(24)};
    border-radius: 50%;
    border: ${({ completed, theme }) =>
      completed ? "none" : `1px solid ${theme.check}`};
    background: ${({ completed, theme }) => !completed && theme.listBg};
    background: ${({ completed, theme }) =>
      completed && `url(${check}), ${theme.checkHover}`};
    background-repeat: no-repeat;
    background-position: center;
    margin-left: ${rem(24)};
    margin-right: ${rem(24)};
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(${rem(0.4)}, ${rem(19.6)});
    z-index: 10;
    cursor: pointer;
  }
  &:hover:after {
    display: block;
    content: "";
    width: ${rem(26)};
    height: ${rem(26)};
    background-image: ${({ theme }) => theme.checkHover};
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(${rem(23.3)}, ${rem(18.5)});
    border-radius: 50%;
  }

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
  font-size: ${rem(18)};
  color: ${({ completed, theme }) =>
    completed ? theme.textCompleted : theme.textActive};
  text-decoration: ${({ completed }) => completed && "line-through"};
  overflow: hidden;
  cursor: pointer;
`;

const TodoItem = ({ id, todo, state, handleClick, handleRemove }) => {
  return (
    <Item completed={state === "Completed"}>
      <Todo completed={state === "Completed"} onClick={() => handleClick(id)}>
        {todo}
      </Todo>
      <RemoveBtn onClick={() => handleRemove(id)}>Remove</RemoveBtn>
    </Item>
  );
};

export default TodoItem;
