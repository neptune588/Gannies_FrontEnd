import eye from '@/assets/icons/eyes/eye.svg';
import { IconBox } from '@/components/Icons/style';

import styled from 'styled-components';

const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

export default function Eye({
  postViewCount = null,
  handlePasswordViewClick = null,
  ...props
}) {
  return (
    <IconBox onClick={handlePasswordViewClick || undefined} {...props}>
      <Icon src={eye} alt='eye' />
      {postViewCount && <p>{postViewCount.toLocaleString()}</p>}
    </IconBox>
  );
}
