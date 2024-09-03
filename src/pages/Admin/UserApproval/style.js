import styled from 'styled-components';

const PrimaryColor = styled.p`
  color: ${({ theme: { colors } }) => {
    return colors.primary;
  }};
`;

export { PrimaryColor };
