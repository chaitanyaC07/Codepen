import { useEffect, useState } from "react";

const PREFIX = "codepen-clone-";

export default function useLocalStorage(key, intitalValue) {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);

    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof intitalValue === "function") {
      return intitalValue();
    } else {
      return intitalValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
