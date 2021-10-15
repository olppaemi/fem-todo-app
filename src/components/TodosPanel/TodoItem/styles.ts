import styled from "styled-components";
import media from "styles/media";
import { rem } from "styles/utils";

export const TodoItem = styled.div`
  width: 100%;
  height: ${rem(64)};
  padding: ${rem(20)} ${rem(24)} ${rem(20)} 0;

  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.listBg};
  border-bottom: 1px solid ${({ theme }) => theme.border};

  @media (max-width: ${media.sm}) {
    height: ${rem(48)};
  }
`;

export const CircleWrapper = styled.div`
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

  @media (max-width: ${media.sm}) {
    width: ${rem(20)};
    height: ${rem(20)};
  }
`;

export const CircleButton = styled.button<{ $completed: boolean }>`
  width: ${rem(22)};
  height: ${rem(22)};
  border-radius: 50%;
  background: ${({ theme, $completed }) => !$completed && theme.listBg};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${media.sm}) {
    width: ${rem(18)};
    height: ${rem(18)};
  }
`;

export const Text = styled.p<{ $completed: boolean }>`
  width: ${(488 / 560) * 100}%;
  text-decoration: ${({ $completed }) => $completed && "line-through"};
  font-size: ${rem(18)};
  letter-spacing: -${rem(0.25)};
  color: ${({ theme, $completed }) =>
    $completed ? theme.textCompleted : theme.textActive};
  cursor: pointer;

  @media (max-width: ${media.sm}) {
    font-size: ${rem(12)};
    letter-spacing: -${rem(0.17)};
  }
`;

export const RemoveButton = styled.button``;
