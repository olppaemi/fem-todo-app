import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {    
    font-family: 'Josefin Sans', sans-serif;
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
