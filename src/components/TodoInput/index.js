import React, { useState } from "react";
import rem from "services/rem";
import styled from "styled-components";

const TodoInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${rem(64)};
  background-color: ${({ theme }) => theme.listBg};
  border-radius: ${rem(5)};
  margin-bottom: ${rem(24)};
  padding-left: ${rem(68)};
  position: relative;

  &::before {
    display: block;
    content: "";
    width: ${rem(24)};
    height: ${rem(24)};
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.check};
    margin-left: ${rem(24)};
    margin-right: ${rem(24)};
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(${rem(0.4)}, ${rem(19.6)});
    z-index: 10;
  }

  input {
    font-size: ${rem(18)};
    color: ${({ theme }) => theme.textActive};
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    background: transparent;
    &::placeholder {
      color: ${({ theme }) => theme.textState};
    }
  }
`;

const TodoInput = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const handleInput = (e) => {
    if (e.key === "Enter") {
      console.log("enter");
      handleAdd(text);
      setText("");
    }
  };

  return (
    <TodoInputContainer>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleInput}
      />
    </TodoInputContainer>
  );
};

export default TodoInput;
