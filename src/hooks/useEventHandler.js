import { useState } from 'react';

export function useEventHandler({ changeDefaultValue } = {}) {
  const [changeValue, setChangeValue] = useState(
    changeDefaultValue === undefined ? '' : changeDefaultValue
  );

  const handleChange = (value) => {
    setChangeValue(value);
  };

  return {
    changeValue,
    handleChange,
  };
}
