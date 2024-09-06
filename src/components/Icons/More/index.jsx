import styled from 'styled-components';

import eclipse from '@/assets/icons/etc/eclipse.svg';

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
  handleMoreButtonClick = null,
}) {
  return (
    <MoreButton
      $width={width}
      $height={height}
      onClick={handleMoreButtonClick || undefined}
    >
      <img src={eclipse} alt='more-button' />
    </MoreButton>
  );
}
