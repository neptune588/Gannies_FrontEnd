import { useState, useEffect, useRef } from 'react';

export const useTimer = (initialTime = 0) => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, time]);

  const start = () => setIsActive(true);
  const stop = () => setIsActive(false);
  const reset = () => {
    setTime(initialTime);
    setIsActive(false);
  };

  return { time, start, stop, reset };
};
