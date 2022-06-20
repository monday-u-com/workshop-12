import {useEffect, useState} from "react";

export const useDebounce = (value, delay) => {
  // this hook should get a value and delay and return a debounced value
  const [debouncedValue, setValue] = useState(value);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValue(value);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [value, delay])
  return debouncedValue;
};
