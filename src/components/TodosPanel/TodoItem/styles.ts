import styled from "styled-components";
import { rem } from "styles/utils";

export const TodoItem = styled.div`
  width: 100%;
  height: ${rem(64)};
  padding: ${rem(20)} ${rem(24)} ${rem(20)} 0;

  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.listBg};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const CheckButton = styled.button`
  width: ${(72 / 560) * 100}%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div<{ $completed: boolean }>`
  width: ${rem(24)};
  height: ${rem(24)};
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme, $completed }) =>
    $completed ? theme.checkHover : theme.border};
  border-radius: 50%;

  &:hover {
    background: ${({ theme }) => theme.checkHover};
  }
`;

export const CircleBackground = styled.div<{ $completed: boolean }>`
  width: ${rem(22)};
  height: ${rem(22)};
  border-radius: 50%;
  background: ${({ theme, $completed }) => !$completed && theme.listBg};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p<{ $completed: boolean }>`
  width: ${(488 / 560) * 100}%;
  text-decoration: ${({ $completed }) => $completed && "line-through"};
  color: ${({ theme, $completed }) =>
    $completed ? theme.textCompleted : theme.textActive};
  cursor: pointer;
`;

export const RemoveButton = styled.button``;
