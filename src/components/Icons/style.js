import styled from 'styled-components';

export const IconBox = styled.div`
  display: flex;
  align-items: center;

  > p {
    margin-left: 8px;
    color: ${({ theme: { colors } }) => {
      return colors.gray['60'];
    }};
    font-size: ${({ theme: { typo } }) => {
      return typo.size.xs;
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.medium;
    }};
  }
`;
