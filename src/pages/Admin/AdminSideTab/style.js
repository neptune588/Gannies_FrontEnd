import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { medium_600, medium_700 } from '@/styles/commonStyle/localTextStyle';

const TabContainer = styled.div`
  position: fixed;
  width: 405px;
  height: 100vh;
  padding: 52px 53px 0 52px;
  background-color: ${({ theme: { colors } }) => {
    return colors.primary;
  }};
`;

const ProfileBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-bottom: 50px;

  > p {
    color: ${({ theme: { colors } }) => {
      return colors.white;
    }};
    ${medium_600}
  }
`;

const MainLogo = styled(Link)`
  display: block;
  width: 130px;
  margin-bottom: 20px;
  > img {
    width: 100%;
  }
`;

const TabMenuList = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  height: 70px;
  padding-left: 30px;
  user-select: none;
  cursor: pointer;
  background-color: ${({
    $currentActiveTabMenu,
    $ownMenu,
    theme: { colors },
  }) => {
    return $currentActiveTabMenu === $ownMenu && colors.white;
  }};
  border-radius: 16px;

  > img {
    width: 24px;
    height: 24px;
    margin-right: 25px;
  }
  > p {
    color: ${({ $currentActiveTabMenu, $ownMenu, theme: { colors } }) => {
      return $currentActiveTabMenu === $ownMenu ? colors.primary : colors.white;
    }};
    ${medium_700}
  }
`;

export { MainLogo, TabContainer, ProfileBox, TabMenuList };
