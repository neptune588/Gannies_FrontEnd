import clock from '@/assets/icons/etc/clock.svg';
import { IconBox } from '@/components/Icons/style';
import { TimeStringConverter } from '@/utils/dateFormatting';

import styled from 'styled-components';

const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

const Time = styled.p`
  margin-right: 16px;
`;

export default function Clock({ time = 0, isVerify = true }) {
  return (
    <IconBox>
      <Icon src={clock} alt='clock' />
      {isVerify && <Time>{TimeStringConverter(time)}</Time>}
    </IconBox>
  );
}
