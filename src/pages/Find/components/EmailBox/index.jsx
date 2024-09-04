import styled from 'styled-components';

import { authEmailColorBoxStyle } from '@/styles/commonStyle/box';

const StyledEmailBox = styled.div`
  ${authEmailColorBoxStyle};
  margin-top: 40px;
`;

function EmailBox({ text }) {
  return <StyledEmailBox>{text}</StyledEmailBox>;
}

export default EmailBox;
