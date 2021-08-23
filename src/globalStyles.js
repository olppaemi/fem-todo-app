import { createGlobalStyle } from "styled-components";
import bgDesktopDark from "assets/bg-desktop-dark.jpg";
import bgMobileDark from "assets/bg-mobile-dark.jpg";
import bgDesktopLight from "assets/bg-desktop-light.jpg";
import bgMobileLight from "assets/bg-mobile-light.jpg";
import rem from "services/rem";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
    margin: 0;
    padding: 0;
  }

  body {    
    font-family: 'Josefin Sans', sans-serif;
    background-color: ${({ theme }) => theme.background};
    background-image: ${({ theme }) => `url(${theme.bgDesktop})`};
    background-position: top;
    background-repeat: no-repeat;
    background-size: 100%; 
    
    @media only Screen and (max-width: ${rem(768)}) {
      background-image: ${({ theme }) => `url(${theme.bgMobile})`};
      background-position: top;
      background-repeat: no-repeat;
      background-size: 100%; 
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-top: 0;
    line-height: 1.1;
  }

  input {
    font-family: inherit;
  }
`;

export const lightTheme = {
  background: "hsl(236, 33%, 92%)",
  bgDesktop: `${bgDesktopLight}`,
  bgMobile: `${bgMobileLight}`,
  listBg: "hsl(0, 0%, 98%)",
  check: "hsl(233, 11%, 84%)",
  checkHover:
    "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
  textHeader: "hsl(236, 33%, 92%)",
  textActive: "hsl(235, 19%, 35%)",
  textCompleted: "hsl(233, 11%, 84%)",
  textState: "hsl(236, 9%, 61%)",
  textStateHover: "hsl(235, 19%, 35%)",
  textCurrentState: "hsl(220, 98%, 61%)",
  border: "hsl(233, 11%, 84%)",
};

export const darkTheme = {
  background: "hsl(235, 21%, 11%)",
  bgDesktop: `${bgDesktopDark}`,
  bgMobile: `${bgMobileDark}`,
  listBg: "hsl(235, 24%, 19%)",
  check: "hsl(237, 14%, 26%)",
  checkHover:
    "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
  textHeader: "hsl(236, 33%, 92%)",
  textActive: "hsl(234, 39%, 85%)",
  textCompleted: "hsl(233, 14%, 35%)",
  textState: "hsl(234, 11%, 52%)",
  textStateHover: "hsl(236, 33%, 92%)",
  textCurrentState: "hsl(220, 98%, 61%)",
  border: "hsl(233, 14%, 35%)",
};
