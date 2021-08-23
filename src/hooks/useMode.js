import { darkTheme, lightTheme } from "globalStyles";
import { useEffect, useState } from "react";

export default function useMode() {
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    if (checked) {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  }, [checked]);

  return {
    checked,
    setChecked,
    theme,
  };
}
