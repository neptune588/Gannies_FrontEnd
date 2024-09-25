import styled from 'styled-components';

import { centerAlignStyle } from '@/styles/commonStyle/etc';
import { small_500 } from '@/styles/commonStyle/localTextStyle';

const NumberBox = styled.li`
  ${centerAlignStyle}
  width: 30px;
  height: 30px;
  color: ${({ $myPageNumber, $nowActiveNumber, theme: { colors } }) => {
    return $myPageNumber === $nowActiveNumber
      ? colors.primary
      : colors.gray['70'];
  }};
  ${small_500}
  border: 1px solid
    ${({ $myPageNumber, $nowActiveNumber, theme: { colors } }) => {
    return $myPageNumber === $nowActiveNumber ? colors.primary : 'white';
  }};

  border-radius: 4px;
  user-select: none;
  cursor: pointer;
`;

export default function PageNumber({
  myPageNumber,
  currentPageNumber = 0,
  handlePageNumberClick = null,
}) {
  return (
    <NumberBox
      onClick={handlePageNumberClick || null}
      $myPageNumber={myPageNumber}
      $nowActiveNumber={currentPageNumber}
    >
      {myPageNumber + 1}
    </NumberBox>
  );
}
