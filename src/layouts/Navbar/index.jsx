import { useState } from 'react';
import { useDispatch } from 'react-redux';

import uuid from 'react-uuid';

import { Wrapper, Button } from '@/layouts/Navbar/style';

import { setBoardType } from '@/store/boardTypeSlice';

import { navBarMenuData } from '@/layouts/Navbar/data';

import useSelectorList from '@/hooks/useSelectorList';

function Navbar() {
  const dispatch = useDispatch();

  const { currentBoardType, bannerTitle, bannerDesc } = useSelectorList();
  const [navBarMenus, setNavBarMenus] = useState(navBarMenuData);

  return (
    <Wrapper>
      {navBarMenus.map((navBarMenu) => {
        return (
          <Button key={uuid()} to={navBarMenu.path}>
            {navBarMenu.label}
          </Button>
        );
      })}
    </Wrapper>
  );
}

export default Navbar;
