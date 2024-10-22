import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import {
  primaryColorBoxStyle,
  primaryBorderBoxStyle,
} from '@/styles/commonStyle/box';
import { centerAlignStyle } from '@/styles/commonStyle/etc';
import { medium_400 } from '@/styles/commonStyle/localTextStyle';

const CansleButton = styled.button`
  ${primaryBorderBoxStyle}
  ${centerAlignStyle}
  width: 240px;
  height: 50px;
  color: ${({ theme: { colors } }) => {
    return colors.primary;
  }};
  ${medium_400}
  cursor: pointer;
  user-select: none;
`;

const SubmitButton = styled.button`
  ${primaryColorBoxStyle}
  ${centerAlignStyle}
  width: 240px;
  height: 50px;
  color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  ${medium_400}
  cursor: pointer;
  user-select: none;
`;

export default function Buttons({ currentBoardType, type, prevPostId }) {
  const navigate = useNavigate();

  return (
    <>
      <CansleButton
        type='button'
        onClick={() => {
          window.scroll({ top: 0, left: 0 });
          if (type === 'isEdit') {
            navigate(`/community/${currentBoardType}/post/${prevPostId}`);
          } else {
            navigate(`/community/${currentBoardType}`);
          }
        }}
      >
        취소하기
      </CansleButton>
      <SubmitButton type='submit'>등록하기</SubmitButton>
    </>
  );
}
