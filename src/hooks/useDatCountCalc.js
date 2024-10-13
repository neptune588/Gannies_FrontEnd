import { useState, useEffect } from 'react';

export default function useDatCountCalc() {
  const [dat, setDat] = useState('');
  const [datCount, setDatCount] = useState(1);

  useEffect(() => {
    const datRepeat = setInterval(() => {
      //console.log('인터벌');
      if (datCount > 3) {
        setDat('');
        setDatCount(1);
      }

      setDat((prev) => prev + '·');
      setDatCount((prev) => prev + 1);
    }, 500);

    return () => {
      clearInterval(datRepeat);
    };
  }, [datCount]);

  return {
    dat,
  };
}
