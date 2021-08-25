import React from "react";
import rem from "services/rem";
import styled from "styled-components";
import { Button } from "../Button/index";

const Wrapper = styled.div`
  @media only screen and (max-width: ${rem(624)}) {
    position: absolute;
    top: 150%;
    left: 0;
    right: 0;
    height: ${rem(48)};
    background: ${({ theme }) => theme.listBg};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
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
