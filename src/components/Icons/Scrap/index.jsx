import styled from 'styled-components';

import acitveScrap from '@/assets/icons/scraps/scrap_active.svg';
import inacitveScrap from '@/assets/icons/scraps/scrap_inactive.svg';

const Icons = styled.img`
  cursor: pointer;
  user-select: none;
  width: ${({ $pageName }) => {
    return $pageName === 'post-detail-view' ? '36px' : '18px';
  }};
  height: ${({ $pageName }) => {
    return $pageName === 'post-detail-view' ? '36px' : '18px';
  }};
`;

export default function Scrap({
  handleScrapClick,
  pageName = 'post-detail-view',
  scrapClickState = false,
}) {
  return (
    <Icons
      src={scrapClickState ? acitveScrap : inacitveScrap}
      $pageName={pageName}
      onClick={handleScrapClick || undefined}
    />
  );
}
