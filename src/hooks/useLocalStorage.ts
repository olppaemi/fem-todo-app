import { useEffect, useState } from "react";

export default function useLocalStorage(key: string, initialValue: any) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue) {
      setValue(storedValue);
    }
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}
