import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  primaryColorBoxStyle,
  primaryBorderBoxStyle,
} from '@/styles/commonStyle/box';
import { centerAlignStyle } from '@/styles/commonStyle/etc';

const CansleButton = styled(Link)`
  ${primaryBorderBoxStyle}
  ${centerAlignStyle}
  width: 240px;
  height: 50px;
  color: ${({ theme: { colors } }) => {
    return colors.primary;
  }};
  font-size: ${({ theme: { typo } }) => {
    return typo.size.md;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.regular;
  }};
  cursor: pointer;
  user-select: none;
`;

const SubmitButton = styled.button`
  ${primaryColorBoxStyle}
  ${centerAlignStyle}
  width: 240px;
  height: 50px
  color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  font-size: ${({ theme: { typo } }) => {
    return typo.size.md;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.regular;
  }};
  cursor: pointer;
  user-select: none;
`;

export default function Buttons({ onSubmit = null }) {
  return (
    <>
      <CansleButton to='/community'>취소하기</CansleButton>
      <SubmitButton type='submit' disabled>
        등록하기
      </SubmitButton>
    </>
  );
}
