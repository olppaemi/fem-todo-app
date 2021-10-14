import { useCallback, useState } from "react";
import { DefaultTheme } from "styled-components";
import { darkTheme, lightTheme } from "styles/theme";

export default function useMode() {
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

  return {
    theme,
    mode,
    toggleMode,
  };
}
