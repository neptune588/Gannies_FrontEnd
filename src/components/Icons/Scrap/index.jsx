import styled from 'styled-components';

import acitveScrap from '@/assets/icons/scraps/scrap_active.svg';
import inacitveScrap from '@/assets/icons/scraps/scrap_inactive.svg';

const Icons = styled.img`
  cursor: pointer;
  user-select: none;
  width: ${({ $pageName }) => {
    return $pageName === 'create-community-create' ? '36px' : '18px';
  }};
  height: ${({ $pageName }) => {
    return $pageName === 'create-community-create' ? '36px' : '18px';
  }};
`;

export default function Scrap({ handleScrapClick, pageName, scrapState }) {
  return (
    <Icons
      src={scrapState ? acitveScrap : inacitveScrap}
      $pageName={pageName}
      onClick={handleScrapClick || undefined}
    />
  );
}
