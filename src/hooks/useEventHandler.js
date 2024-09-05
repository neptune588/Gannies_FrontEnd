import { useState } from 'react';

export function useEventHandler({
  clickChangeDefaultValue,
  valueToggleDefaultValue,
}) {
  const [clickChangeState, setclickChangeState] = useState(
    clickChangeDefaultValue
  );
  const [valueToggleState, setValueToggleState] = useState(
    valueToggleDefaultValue
  );

  const handleClickChange = (value) => {
    setclickChangeState(value);
  };

  const handleToggle = ({ key, listNumber }) => {
    const toggleFnc = (data) => {
      return data.map((list, idx) => {
        return {
          ...list,
          [key]: listNumber === idx ? !list[key] : list[key],
        };
      });
    };
    setValueToggleState((prev) => toggleFnc(prev));
  };

  return {
    clickChangeState,
    handleClickChange,
  };
}
