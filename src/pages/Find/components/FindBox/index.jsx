import styled from 'styled-components';

const Find = styled.div`
  width: 508px;
  display: flex;
  align-items: center;
  margin-top: 77px;
  margin-bottom: ${({ $margin }) => $margin || '0px'};
`;

function FindBox({ $margin, children }) {
  return <Find $margin={$margin}>{children}</Find>;
}

export default FindBox;
