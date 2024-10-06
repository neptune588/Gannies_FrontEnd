import { useState } from 'react';

export default function useEventHandler({
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
      console.log('배열');
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
