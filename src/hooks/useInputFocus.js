import { useState } from 'react';

export function useInputFocus(initialState = undefined) {
  const [isFocused, setIsFocused] = useState(initialState);

  const handleIsFocused = (indexOrValue, value) => {
    if (Array.isArray(isFocused)) {
      setIsFocused((prev) => {
        const newState = [...prev];
        newState[indexOrValue] = value;
        return newState;
      });
    } else {
      setIsFocused(indexOrValue);
    }
  };

  return {
    isFocused,
    handleIsFocused,
  };
}
