import { useModeContext } from "contexts/ModeContext";
import Front from "pages/Front";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/globalStyles";

const App = () => {
  const { theme } = useModeContext();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Front />
    </ThemeProvider>
  );
};

export default App;
