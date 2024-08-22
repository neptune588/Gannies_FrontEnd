import styled from 'styled-components';
import { defaultBorderBoxStyle, centerAlignStyle } from '@/styles/commonStyle';

const ArrowButton = styled.div`
  ${defaultBorderBoxStyle}
  ${centerAlignStyle}
  width: 32px;
  height: 32px;
  cursor: pointer;
  user-select: none;
  > img {
    width: 18px;
    height: 18px;
  }
`;

export default function PageControlArrow({ onClick = null, arrowImg, alt }) {
  return (
    <ArrowButton onClick={onClick || null}>
      <img src={arrowImg} alt={alt} />
    </ArrowButton>
  );
}
