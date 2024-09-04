import styled from 'styled-components';

import { h1_600 } from '@/styles/commonStyle/localTextStyle';

const TitleBox = styled.h2`
  color: ${({ theme: { colors } }) => {
    return colors.gray['100'];
  }};
  ${h1_600}
  user-select: none;
`;
export default function Title({ children }) {
  return <TitleBox>{children}</TitleBox>;
}
