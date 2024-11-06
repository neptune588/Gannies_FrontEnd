import styled from 'styled-components';

import { h3_600 } from '@/styles/commonStyle/localTextStyle';

const TitleSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 40px;
`;

const PostTitle = styled.h2`
  ${h3_600}
  color: ${({ theme: { colors } }) => {
    return colors.gray['100'];
  }};
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 80px;
  justify-content: space-between;
`;

export { TitleSection, PostTitle, IconBox };
