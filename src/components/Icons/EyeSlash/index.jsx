import eyeSlash from '@/assets/icons/eyes/eye_slash.svg';
import { IconBox } from '@/components/Icons/style';

import styled from 'styled-components';

const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

export default function EyeSlash({ handlePasswordViewClick = null, ...props }) {
  return (
    <IconBox onClick={handlePasswordViewClick || undefined} {...props}>
      <Icon src={eyeSlash} alt='eyeSlash' />
    </IconBox>
  );
}
