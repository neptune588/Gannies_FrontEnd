import styled from 'styled-components';

import { medium_600, h4_600 } from '@/styles/commonStyle/localTextStyle';
import { paginationWrapperStyle } from '@/styles/commonStyle/wrapper';

const TitleBox = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  >div: first-child {
    display: flex;
    align-items: baseline;
    > p {
      color: ${({ theme: { colors } }) => {
        return colors.gray['80'];
      }};
      ${medium_600}
      margin-left: 15px;
    }
  }
`;

const Title = styled.h2`
  ${h4_600}
`;

const PageWrapper = styled.section`
  ${paginationWrapperStyle}
  margin: 50px auto 130px;
`;

export { TitleBox, Title, PageWrapper };
