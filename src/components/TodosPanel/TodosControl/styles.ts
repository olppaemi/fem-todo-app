import styled from "styled-components";
import media from "styles/media";
import { rem } from "styles/utils";

export const TodosControl = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${rem(16)} ${rem(24)};
  background-color: ${({ theme }) => theme.listBg};

  font-size: ${rem(14)};
  color: ${({ theme }) => theme.textState};
  position: relative;

  @media (max-width: ${media.sm}) {
    font-size: ${rem(12)};
  }
`;

export const Controls = styled.div`
  & > * + * {
    margin-left: ${rem(18)};
  }

  @media (max-width: ${media.sm}) {
    width: 100%;
    height: ${rem(48)};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(${rem(64)});
    background-color: ${({ theme }) => theme.listBg};
    border-radius: ${rem(5)};
  }
`;

export const Button = styled.button<{ $selected: boolean }>`
  font-size: ${rem(14)};
  font-weight: bold;
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
