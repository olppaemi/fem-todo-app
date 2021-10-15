import useLocalStorage from "hooks/useLocalStorage";
import { createContext, FC, useCallback, useContext, useState } from "react";
import { DefaultTheme } from "styled-components";
import { darkTheme, lightTheme } from "styles/theme";

export type ModeContextProps = {
  theme: DefaultTheme;
  mode: "light" | "dark";
  toggleMode: () => void;
};

const ModeContext = createContext<ModeContextProps>({} as ModeContextProps);

export const ModeContextProvider: FC = ({ children }) => {
  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark").matches;

  let initTheme = prefersDarkMode ? "dark" : "light";
  const localTheme = localStorage.getItem("theme");

  if (localTheme) {
    initTheme = localTheme;
  }

  const [theme, setTheme] = useState<DefaultTheme>(
    initTheme === "dark" ? darkTheme : lightTheme
  );
  const [mode, setMode] = useLocalStorage(
    "theme",
    prefersDarkMode ? "dark" : "light"
  );

  const toggleMode = useCallback(() => {
    if (mode === "light") {
      setMode("dark");
      setTheme(darkTheme);
    } else {
      setMode("light");
      setTheme(lightTheme);
    }
  }, [mode, setMode]);

  return (
    <ModeContext.Provider value={{ theme, mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useModeContext = () => useContext(ModeContext);
