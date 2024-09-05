import styled from 'styled-components';

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
  align-items: center;
  margin-bottom: 40px;
  > div {
    width: 80px;
    height: 80px;
    margin-right: 40px;
    background-color: ${({ theme: { colors } }) => {
      return colors.gray['30'];
    }};
    border-radius: 50%;
  }

  > p {
    color: ${({ theme: { colors } }) => {
      return colors.white;
    }};
    ${medium_600}
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

export { TabContainer, ProfileBox, TabMenuList };
