import styled from 'styled-components';
import { centerAlignStyle } from '@/styles/commonStyle/etc';

import { small_500 } from '@/styles/commonStyle/localTextStyle';

const NumberBox = styled.li`
  ${centerAlignStyle}
  width: 30px;
  height: 30px;
  color: ${({ $isMyNumber, $isActiveNumber, theme: { colors } }) => {
    return $isMyNumber === $isActiveNumber ? colors.primary : colors.gray['70'];
  }};
  ${small_500}
  border: 1px solid
    ${({ $isMyNumber, $isActiveNumber, theme: { colors } }) => {
    return $isMyNumber === $isActiveNumber ? colors.primary : 'white';
  }};

  border-radius: 4px;
  user-select: none;
  cursor: pointer;
`;

export default function PageNumber({
  myNumber,
  activeNumber = 0,
  onClick = null,
}) {
  return (
    <NumberBox
      onClick={onClick || null}
      $isMyNumber={myNumber}
      $isActiveNumber={activeNumber}
    >
      {myNumber + 1}
    </NumberBox>
  );
}
