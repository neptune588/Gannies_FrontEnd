import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { medium_600 } from '@/styles/commonStyle/localTextStyle';

const ActiveBox = styled(Link)`
  width: 254px;
  border-bottom: 3px solid ${(props) => props.theme.colors.primary};
  ${medium_600}
  color: ${(props) => props.theme.colors.primary};
  height: 33px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
function Active({ type, text }) {
  return <ActiveBox to={`/find/${type}`}>{text}</ActiveBox>;
}

export default Active;
