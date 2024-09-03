import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 830px;
  padding: 45px 42px 12px 42px;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  border-radius: 24px;
`;

export default function TableWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
