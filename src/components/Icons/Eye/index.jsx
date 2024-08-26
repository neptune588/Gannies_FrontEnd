import eye from '@/assets/icons/eyes/eye.svg';
import { IconBox } from '@/components/Icons/style';

import styled from 'styled-components';

const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

export default function Eye({ viewCount, handlePasswordViewClick = null }) {
  return (
    <IconBox onClick={handlePasswordViewClick || undefined}>
      <Icon src={eye} alt='eye' />
      {viewCount ? <p>{viewCount.toLocaleString()}</p> : <></>}
    </IconBox>
  );
}
