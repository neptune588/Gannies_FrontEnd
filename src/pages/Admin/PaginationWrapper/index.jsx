import styled from 'styled-components';

import { paginationWrapperStyle } from '@/styles/commonStyle/wrapper';

const Wrapper = styled.section`
  ${paginationWrapperStyle}
  margin: 70px auto 165px;
`;

export default function PaginationWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
