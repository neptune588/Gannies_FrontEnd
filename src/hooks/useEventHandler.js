import { useState } from 'react';

export function useEventHandler({ clickChangeDefaultValue }) {
  const [clickChangeState, setclickChangeState] = useState(
    clickChangeDefaultValue
  );

  const handleClickChange = (value) => {
    setclickChangeState(value);
  };
  return {
    clickChangeState,
    handleClickChange,
  };
}
