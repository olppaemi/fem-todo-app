import React from "react";
import rem from "services/rem";
import styled from "styled-components";
import { Button } from "./Button/index";
import TodoFilter from "./TodoFilter";

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${rem(50)};
  padding: ${rem(18)} ${rem(24)};
  color: ${({ theme }) => theme.textState};
`;
const LeftItems = styled.div``;

const TodoClear = styled(Button)`
  font-weight: 700;
  &:hover {
    color: ${({ theme }) => theme.textStateHover};
  }
`;

const TodoControls = ({
  activeItems,
  handleAll,
  handleActive,
  handleCompleted,
  handleClear,
  filter,
}) => {
  return (
    <ControlsContainer>
      <LeftItems>{activeItems} items left</LeftItems>
      <TodoFilter
        handleAll={handleAll}
        handleActive={handleActive}
        handleCompleted={handleCompleted}
        filter={filter}
      />
      <TodoClear handleClear={handleClear}>Clear Completed</TodoClear>
    </ControlsContainer>
  );
};

export default TodoControls;
