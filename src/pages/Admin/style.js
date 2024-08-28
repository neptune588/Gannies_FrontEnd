import styled from 'styled-components';

const ContentsContainer = styled.div`
  display: flex;
  background-color: ${({ theme: { colors } }) => {
    return colors.gray['10'];
  }};
`;

export { ContentsContainer };
