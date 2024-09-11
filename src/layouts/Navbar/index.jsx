import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import uuid from 'react-uuid';

import { Wrapper, Button } from '@/layouts/Navbar/style';

import { setBoardType } from '@/store/navBarOptions';

import { navBarMenuData } from '@/layouts/Navbar/data';

function Navbar() {
  const dispatch = useDispatch();

  const [navBarMenus] = useState(navBarMenuData);
  const [currentActiveMenuNumber, setCurrentActiveMenuNumber] = useState(0);

  const handleNavBarMenuClick = (data, number) => {
    dispatch(setBoardType(data));
    setCurrentActiveMenuNumber(number);
  };

  return (
    <Wrapper>
      {navBarMenus.map((navBarMenu) => {
        return (
          <Button
            key={uuid()}
            to={navBarMenu.path}
            $currentActiveMenuNumber={currentActiveMenuNumber}
            $myMenuNumber={navBarMenu.number}
            onClick={() => {
              handleNavBarMenuClick(
                {
                  boardType: navBarMenu.boardType,
                  bannerTitle: navBarMenu.bannerTitle,
                  bannerDesc: navBarMenu.bannerDesc,
                },
                navBarMenu.number
              );
            }}
          >
            {navBarMenu.label}
          </Button>
        );
      })}
    </Wrapper>
  );
}

export default Navbar;
