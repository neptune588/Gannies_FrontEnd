import upload from '@/assets/icons/etc/upload.svg';
import { IconBox } from '@/components/Icons/style';

import styled from 'styled-components';

const Icon = styled.img`
  width: 16px;
  height: 18px;
`;

export default function Upload() {
  return (
    <IconBox>
      <Icon src={upload} alt='upload' />
    </IconBox>
  );
}
