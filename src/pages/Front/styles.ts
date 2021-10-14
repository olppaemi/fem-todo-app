import styled from "styled-components";
import media from "styles/media";
import { rem } from "styles/utils";

export const Page = styled.div`
  min-height: 100vh;

  background: top / contain no-repeat
      ${({ theme }) => `url(${theme.bgDesktop})`},
    ${({ theme }) => theme.background};
  padding-top: ${rem(70)};

  @media (max-width: ${media.sm}) {
    background: top / contain no-repeat
        ${({ theme }) => `url(${theme.bgMobile})`},
      ${({ theme }) => theme.background};
  }
`;

export const Center = styled.div`
  max-width: ${rem(541)};
  margin: auto;
`;
