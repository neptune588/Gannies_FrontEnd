import styled from 'styled-components';

import { xsmall_500, h4_500 } from '@/styles/commonStyle/localTextStyle';

const Title = styled.h2`
  ${h4_500}
  margin-left: 30px;
`;
const Notice = styled.p`
  color: ${({ theme: { colors } }) => {
    return colors.black;
  }};
  ${xsmall_500}
  margin-right: 70px;
`;

export default function CategoryTitle() {
  return (
    <>
      <Title>게시글작성</Title>
      <Notice>*필수항목</Notice>
    </>
  );
}
