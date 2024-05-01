import { useEffect, useState } from "react";

interface IProps {
  value: string;
  delay: number;
}

const useDebounce = ({ value, delay }: IProps) => {

  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay);

    return () => {
      clearTimeout(handler);
    }

  }, [value, delay]);

  return debouncedValue;
}

export { useDebounce };