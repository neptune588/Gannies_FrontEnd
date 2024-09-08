import clock from '@/assets/icons/etc/clock.svg';
import { IconBox } from '@/components/Icons/style';

import styled from 'styled-components';

const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

export default function Clock({ time = 0 }) {
  return (
    <IconBox>
      <Icon src={clock} alt='clock' />
      <p>{time}</p>
    </IconBox>
  );
}
