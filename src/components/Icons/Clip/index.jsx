import clip from '@/assets/icons/etc/clip.svg';

import styled from 'styled-components';

const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

export default function Clip() {
  return <Icon src={clip} alt='clip' />;
}
