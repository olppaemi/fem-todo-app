import styled from "styled-components";
import { rem } from "styles/utils";

export const Container = styled.div`
  width: 100%;
  height: ${rem(64)};
  background-color: ${({ theme }) => theme.listBg};
  border-radius: ${rem(5)};

  display: flex;
`;

export const Wrapper = styled.div`
  width: ${rem(72)};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div`
  width: ${rem(24)};
  height: ${rem(24)};

  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 50%;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  appearance: none;
  border-top-right-radius: ${rem(5)};
  border-bottom-right-radius: ${rem(5)};
  background-color: ${({ theme }) => theme.listBg};

  font-size: ${rem(18)};
`;
