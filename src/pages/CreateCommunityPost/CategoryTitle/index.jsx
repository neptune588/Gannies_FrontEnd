import styled from 'styled-components';

const Title = styled.h2`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.h4;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.medium;
  }};
  margin-left: 30px;
`;
const Notice = styled.p`
  color: ${({ theme: { colors } }) => {
    return colors.black;
  }};
  font-size: ${({ theme: { typo } }) => {
    return typo.size.xs;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.medium;
  }};
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
