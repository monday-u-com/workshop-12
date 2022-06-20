import React, { useState, useEffect, useCallback } from "react";

export const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = useState(fallbackState);

  useEffect(() => {
    try {
      const storedItem = localStorage.getItem(storageKey);
      if (storedItem) setValue(JSON.parse(storedItem));
    } catch(e) {
      console.error(e);
    }
  }, [storageKey]);

  const storeValue = useCallback((newValue) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(newValue));
    } catch (e) {
      console.error(e)
    }
    setValue(newValue);
  }, [storageKey]);

  return [value, storeValue];
};
