import close from '@/assets/icons/etc/close.svg';

import styled from 'styled-components';

const Icon = styled.img`
  width: 14px;
  height: 14px;
`;

export default function Close(props) {
  return (
    <Icon src={close} alt='close' {...props} />
  );
}
