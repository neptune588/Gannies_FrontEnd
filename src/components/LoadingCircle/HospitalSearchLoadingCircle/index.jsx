import { useState, useEffect } from 'react';
import styled from 'styled-components';

import loading from '@/assets/images/loading_circle.gif';

import { centerAlignStyle } from '@/styles/commonStyle/etc';

import useDatCountCalc from '@/hooks/useDatCountCalc';

const Container = styled.div`
  ${centerAlignStyle}
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  opacity: 0.4;
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
      return typo.size.sm;
    }};
  }
`;

export default function HospitalSearchLoadingCircle() {
  const { dat } = useDatCountCalc();

  return (
    <Container>
      <ContentsBox>
        <img src={loading} alt={'loading'} />
        <p>잠시만 기다려 주세요{dat}</p>
      </ContentsBox>
    </Container>
  );
}
