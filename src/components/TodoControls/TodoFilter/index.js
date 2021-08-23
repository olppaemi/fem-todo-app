import React from "react";
import styled from "styled-components";
import { Button } from "../Button/index";

const Wrapper = styled.div``;
const FilterBtn = styled(Button)`
  font-weight: 700;
  color: ${({ active, theme }) => active && theme.textCurrentState};

  &:hover {
    color: ${({ theme }) => theme.textStateHover};
  }
`;

const TodoFilter = ({ handleAll, handleActive, handleCompleted, filter }) => {
  return (
    <Wrapper>
      <FilterBtn onClick={handleAll} active={filter === "All"}>
        All
      </FilterBtn>
      <FilterBtn onClick={handleActive} active={filter === "Active"}>
        Active
      </FilterBtn>
      <FilterBtn onClick={handleCompleted} active={filter === "Completed"}>
        Completed
      </FilterBtn>
    </Wrapper>
  );
};

export default TodoFilter;
