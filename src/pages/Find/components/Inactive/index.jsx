import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { medium_600 } from '@/styles/commonStyle/localTextStyle';

const InactiveBox = styled(Link)`
  width: 254px;
  ${medium_600}
  color: ${(props) => props.theme.colors.gray[40]};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[40]};
  display: flex;
  justify-content: center;
  height: 33px;
  cursor: pointer;
`;

function Inactive({ type, text }) {
  return <InactiveBox to={`/find/${type}`}>{text}</InactiveBox>;
}

export default Inactive;
