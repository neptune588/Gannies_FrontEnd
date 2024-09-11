import { useState } from 'react';

export const useAuthAllow = (initialState) => {
  const [allow, setAllow] = useState(initialState);

  const handleAllow = (index, value) => {
    setAllow((prevAllow) =>
      prevAllow.map((item, idx) => (idx === index ? value : item))
    );
  };

  return { allow, handleAllow };
};
