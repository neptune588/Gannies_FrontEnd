import styled from 'styled-components';

const ViewBox = styled.p`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.h4;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.semiBold;
  }};
`;

export default function ArrLengthView({ length = 'N' }) {
  return <ViewBox>총 {length}개</ViewBox>;
}
