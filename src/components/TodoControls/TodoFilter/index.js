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

const TodoFilter = ({ handleFilter, filter }) => {
  return (
    <Wrapper>
      <FilterBtn value="All" onClick={handleFilter} active={filter === "All"}>
        All
      </FilterBtn>
      <FilterBtn
        value="Active"
        onClick={handleFilter}
        active={filter === "Active"}
      >
        Active
      </FilterBtn>
      <FilterBtn
        value="Completed"
        onClick={handleFilter}
        active={filter === "Completed"}
      >
        Completed
      </FilterBtn>
    </Wrapper>
  );
};

export default TodoFilter;
