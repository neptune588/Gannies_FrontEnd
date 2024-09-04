import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  align-items: center;
  margin: 0 0 35px 20px;
`;

export default function ArrLengthSection({ children }) {
  return <Section>{children}</Section>;
}
