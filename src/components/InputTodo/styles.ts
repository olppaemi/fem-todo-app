import styled from "styled-components";
import media from "styles/media";
import { rem } from "styles/utils";

export const Form = styled.form`
  width: 100%;
  height: ${rem(64)};
  display: flex;
  background-color: ${({ theme }) => theme.listBg};
  border-radius: ${rem(5)};
  margin-bottom: ${rem(24)};

  @media (max-width: ${media.sm}) {
    height: ${rem(48)};
    margin-bottom: ${rem(16)};
  }
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

  @media (max-width: ${media.sm}) {
    width: ${rem(20)};
    height: ${rem(20)};
  }
`;

export const Input = styled.input`
  width: ${rem(540 - 72)};
  height: 100%;
  border: none;
  outline: none;
  appearance: none;
  border-top-right-radius: ${rem(5)};
  border-bottom-right-radius: ${rem(5)};
  background-color: ${({ theme }) => theme.listBg};

  font-size: ${rem(18)};
  letter-spacing: -${rem(0.25)};
  color: ${({ theme }) => theme.textActive};

  @media (max-width: ${media.sm}) {
    font-size: ${rem(12)};
    letter-spacing: -${rem(0.17)};
  }
`;
