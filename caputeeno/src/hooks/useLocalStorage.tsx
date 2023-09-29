import { useState, useEffect } from "react";

export function useLocalStorage<T>(item: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {

    const storedValue = localStorage.getItem(item);
    
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(item, JSON.stringify(value));
  }, [item, value]);

  const updateLocalStorage = (newValue: T) => {setValue(newValue);};

  return {
    value,
    updateLocalStorage,
  };
}
