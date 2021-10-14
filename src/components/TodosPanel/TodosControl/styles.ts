import styled from "styled-components";
import { rem } from "styles/utils";

export const TodosControl = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${rem(16)} ${rem(24)};
  background-color: ${({ theme }) => theme.listBg};
  color: ${({ theme }) => theme.textState};
`;

export const Controls = styled.div`
  width: ${rem(166)};
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button<{ $selected: boolean }>`
  color: ${({ theme, $selected }) =>
    $selected ? theme.textCurrentState : "inherit"};

  &:hover {
    color: ${({ theme }) => theme.textStateHover};
  }
`;

export const ClearButton = styled.button`
  color: inherit;

  &:hover {
    color: ${({ theme }) => theme.textStateHover};
  }
`;
