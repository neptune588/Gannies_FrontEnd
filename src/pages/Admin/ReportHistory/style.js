import styled from 'styled-components';

import { h1_600 } from '@/styles/commonStyle/localTextStyle';

const TitleCategory = styled.h2`
  margin-right: 65px;

  color: ${({ $currenntActiveCategory, $ownCategory, theme: { colors } }) => {
    return $currenntActiveCategory === $ownCategory
      ? colors.gray['100']
      : colors.gray['50'];
  }};
  ${h1_600}
  cursor: pointer;
  user-select: none;
`;

const ListClickBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 146px);
  height: 100%;
  cursor: pointer;
`;

export { TitleCategory, ListClickBox };
