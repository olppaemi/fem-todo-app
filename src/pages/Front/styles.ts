import styled from "styled-components";
import media from "styles/media";
import { rem } from "styles/utils";

export const Page = styled.div`
  min-height: 100vh;

  background: top / contain no-repeat
      ${({ theme }) => `url(${theme.bgDesktop})`},
    ${({ theme }) => theme.background};
  padding-top: ${rem(70)};
  padding-bottom: ${rem(52)};

  @media (max-width: ${media.sm}) {
    background: top / contain no-repeat
        ${({ theme }) => `url(${theme.bgMobile})`},
      ${({ theme }) => theme.background};
  }
`;

export const Center = styled.div`
  min-width: ${rem(327)};
  width: ${rem(540)};
  margin: auto;

  @media (max-width: ${media.md}) {
    width: ${(327 / 375) * 100}%;
  }
`;
