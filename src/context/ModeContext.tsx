import {
  createContext,
  FC,
  MouseEventHandler,
  useCallback,
  useContext,
  useState,
} from "react";
import { DefaultTheme } from "styled-components";
import { darkTheme, lightTheme } from "styles/theme";

export type ModeContextProps = {
  theme: DefaultTheme;
  mode: "light" | "dark";
  toggleMode: MouseEventHandler<HTMLButtonElement>;
};

const ModeContext = createContext<ModeContextProps>({} as ModeContextProps);

export const ModeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleMode = useCallback(() => {
    if (mode === "light") {
      setMode("dark");
      setTheme(darkTheme);
    } else {
      setMode("light");
      setTheme(lightTheme);
    }
  }, [mode]);

  return (
    <ModeContext.Provider value={{ theme, mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useModeContext = () => useContext(ModeContext);
