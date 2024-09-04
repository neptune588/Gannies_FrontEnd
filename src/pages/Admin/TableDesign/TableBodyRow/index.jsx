import styled from 'styled-components';

const BodyRow = styled.tr`
  display: flex;
  align-items: center;
  position: relative;
  height: 72px;
  border-bottom: 1px solid
    ${({ theme: { colors } }) => {
      return colors.black;
    }};
  &:last-child {
    border: none;
  }
  &:first-child {
    border-bottom: 1px solid
      ${({ theme: { colors } }) => {
        return colors.black;
      }};
  }
`;

export default function TableBodyRow({ children }) {
  return <BodyRow>{children}</BodyRow>;
}
