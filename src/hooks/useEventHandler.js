import { useState } from 'react';

export function useEventHandler({
  changeDefaultValue,
  clickChangeDefaultValue,
} = {}) {
  const [changeValue, setChangeValue] = useState(
    changeDefaultValue === undefined ? '' : changeDefaultValue
  );
  const [clickChangeState, setClickChangeState] = useState(
    clickChangeDefaultValue === undefined ? '' : clickChangeDefaultValue
  );

  const handleChange = (value) => {
    setChangeValue(value);
  };

  const handleClickChange = (indexOrValue, value) => {
    if (Array.isArray(clickChangeState)) {
      setClickChangeState((prevState) => {
        const newState = [...prevState];
        newState[indexOrValue] = value;
        return newState;
      });
    } else {
      setClickChangeState(indexOrValue);
    }
  };

  return {
    changeValue,
    clickChangeState,
    handleChange,
    handleClickChange,
  };
}
