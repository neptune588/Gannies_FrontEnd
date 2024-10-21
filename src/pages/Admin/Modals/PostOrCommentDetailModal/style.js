import styled from 'styled-components';

import { adminPageModalInnerDataBoxStyle } from '@/styles/commonStyle/box';
import { adminPageModalInnerDataTitleStyle } from '@/styles/commonStyle/text';

const DataType = styled.p`
  ${adminPageModalInnerDataTitleStyle}
`;

const LinkBox = styled.div`
  ${adminPageModalInnerDataBoxStyle}
  color: ${({ theme: { colors } }) => {
    return colors.primary;
  }};
  &:hover {
    color: #2d6ab7;
  }
`;

export { DataType, LinkBox };
