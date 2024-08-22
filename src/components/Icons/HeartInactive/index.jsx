import heartInactive from '@/assets/icons/hearts/heart_inactive.svg';
import { IconBox } from '@/components/Icons/style';

import styled from 'styled-components';

const Icon = styled.img`
  width: 18px;
  height: 16px;
`;

export default function HeartInactive({ likeCount = 0 }) {
  return (
    <IconBox>
      <Icon src={heartInactive} alt='heart' />
      <p>{likeCount.toLocaleString()}</p>
    </IconBox>
  );
}
