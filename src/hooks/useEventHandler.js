import { useState } from 'react';

export function useEventHandler({ clickChangeDefaultValue } = {}) {
  const [clickChangeState, setClickChangeState] = useState(
    clickChangeDefaultValue === undefined ? '' : clickChangeDefaultValue
  );

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
    clickChangeState,
    handleClickChange,
  };
}
