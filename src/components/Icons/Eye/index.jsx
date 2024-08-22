import eye from '@/assets/icons/eyes/eye.svg';
import { IconBox } from '@/components/Icons/style';

import styled from 'styled-components';

const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

export default function Eye({ viewCount = 0 }) {
  return (
    <IconBox>
      <Icon src={eye} alt='eye' />
      <p>{viewCount.toLocaleString()}</p>
    </IconBox>
  );
}
