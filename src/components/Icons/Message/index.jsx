import message from '@/assets/icons/etc/message.svg';
import { IconBox } from '@/components/Icons/style';

import styled from 'styled-components';

const Icon = styled.img`
  width: ${({ $width }) => {
    return $width;
  }};
  height: ${({ $height }) => {
    return $height;
  }};
`;

export default function Message({
  width = '24px',
  height = '24px',
  commentCount = 0,
}) {
  return (
    <IconBox>
      <Icon $width={width} $height={height} src={message} alt='comment-count' />
      <p>{commentCount.toLocaleString()}</p>
    </IconBox>
  );
}
