import { useState } from 'react';

export function useInputBorder(initialState = undefined, validate) {
  const [isFocused, setIsFocused] = useState(initialState);
  const [isValid, setIsValid] = useState(initialState);

  const handleIsFocused = (indexOrValue, value) => {
    if (Array.isArray(isFocused)) {
      const index = indexOrValue;
      setIsFocused((prev) => {
        const newState = [...prev];
        newState[index] = value;
        return newState;
      });
    } else {
      const value = indexOrValue;
      setIsFocused(value);
    }
  };

  const handleIsValid = (indexOrValue, value) => {
    if (Array.isArray(isValid)) {
      const index = indexOrValue;
      setIsValid((prev) => {
        const newState = [...prev];
        newState[index] = value;
        return newState;
      });
    } else {
      const value = indexOrValue;
      setIsValid(value);
    }
  };

  const handleInputBlur = (indexOrValue, value) => {
    if (Array.isArray(isValid)) {
      const index = indexOrValue;
      if (value) {
        handleIsValid(index, value);
      } else if (isValid[index] !== false) {
        handleIsValid(index, undefined);
      }
    } else {
      const value = indexOrValue;
      if (value) {
        handleIsValid(validate(value));
      } else if (isValid !== false) {
        handleIsValid();
      }
    }
  };

  return {
    isFocused,
    isValid,
    handleIsValid,
    handleIsFocused,
    handleInputBlur,
  };
}
