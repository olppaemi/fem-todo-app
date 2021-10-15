import styled from "styled-components";
import media from "styles/media";
import { rem } from "styles/utils";

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${rem(40)};
`;

export const Title = styled.h1`
  font-size: ${rem(40)};
  letter-spacing: ${rem(15)};
  color: white;

  @media (max-width: ${media.sm}) {
    font-size: ${rem(24)};
    letter-spacing: ${rem(12)};
  }
`;

export const ToggleButton = styled.button`
  width: ${rem(26)};
  height: ${rem(26)};
  background: transparent;
  border: none;
  outline: none;
`;
