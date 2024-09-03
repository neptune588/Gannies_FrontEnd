import styled from 'styled-components';

const TitleBox = styled.section`
  display: flex;
  align-items: center;
  padding: 115px 0 0 25px;
  margin-bottom: 100px;
`;

export default function TitleSection({ children }) {
  return <TitleBox>{children}</TitleBox>;
}
