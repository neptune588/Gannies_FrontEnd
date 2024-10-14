import styled from 'styled-components';

import { h4_600, large_400 } from '@/styles/commonStyle/localTextStyle';

const SearchResultBox = styled.div`
  display: flex;
  width: 1042px;
  align-items: center;
  margin: 45px auto 40px;

  > h2 {
    ${h4_600}
    margin-right: 20px;
  }
  > p {
    ${large_400}
  }
`;

export { SearchResultBox };
