import { useState } from 'react';

export function useEventHandler({ clickChangeDefaultValue } = {}) {
  const [clickChangeState, setclickChangeState] = useState(
    clickChangeDefaultValue === undefined ? '' : clickChangeDefaultValue
  );

  const handleClickChange = (value) => {
    setclickChangeState(value);
  };

  return {
    clickChangeState,
    handleClickChange,
  };
}
