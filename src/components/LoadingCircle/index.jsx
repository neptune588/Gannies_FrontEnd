import { useState, useEffect } from 'react';
import styled from 'styled-components';

import loading from '@/assets/images/loading_circle.gif';

import { centerAlignStyle } from '@/styles/commonStyle/etc';

const Container = styled.div`
  position: fixed;
  ${centerAlignStyle}
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  opacity: 0.95;
  cursor: pointer;
  z-index: 10;
`;

const ContentsBox = styled.div`
  > p {
    text-align: center;
    margin-top: -3rem;
    color: ${({ theme: { colors } }) => {
      return colors.primary;
    }};
    font-size: ${({ theme: { typo } }) => {
      return typo.size.h4;
    }};
  }
`;

export default function LoadingCircle() {
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

  return (
    <Container>
      <ContentsBox>
        <img src={loading} alt={'loading'} />
        <p>잠시만 기다려 주세요{dat}</p>
      </ContentsBox>
    </Container>
  );
}
