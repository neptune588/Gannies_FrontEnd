import styled from 'styled-components';

const CommentLengthView = styled.span`
  color: ${({ theme: { colors } }) => {
    return colors.highlight;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.semibold;
  }};
  margin-left: 3px;
`;

export default function CommentLength({ children }) {
  return <CommentLengthView>{`[${children}]`}</CommentLengthView>;
}
