import useMode from "hooks/useMode";
import Front from "pages/Front";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/globalStyles";

const App = () => {
  const { theme, mode, toggleMode } = useMode();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Front toggleMode={toggleMode} mode={mode} />
    </ThemeProvider>
  );
};

export default App;
