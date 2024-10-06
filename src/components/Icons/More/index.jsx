import styled from 'styled-components';

import eclipse from '@/assets/icons/etc/eclipse.svg';

const MoreBox = styled.div`
  position: relative;
`;
const MoreButton = styled.button`
  cursor: pointer;
  > img {
    width: ${({ $width }) => {
      return $width;
    }};
    height: ${({ $height }) => {
      return $height;
    }};
  }
`;

export default function More({
  width = '24px',
  height = '24px',
  children,
  ...props
}) {
  return (
    <MoreBox>
      <MoreButton $width={width} $height={height} {...props}>
        <img src={eclipse} alt='more-button' />
      </MoreButton>
      {children}
    </MoreBox>
  );
}
