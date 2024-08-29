import styled from 'styled-components';

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
    font-size: ${({ theme: { typo } }) => {
      return typo.size.md;
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.semiBold;
    }};
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
  background-color: ${({ $activeMenu, $ownContent, theme: { colors } }) => {
    return $activeMenu === $ownContent && colors.white;
  }};
  border-radius: 16px;

  > img {
    width: 24px;
    height: 24px;
    margin-right: 25px;
  }
  > p {
    color: ${({ $activeMenu, $ownContent, theme: { colors } }) => {
      return $activeMenu === $ownContent ? colors.primary : colors.white;
    }};
    font-size: ${({ theme: { typo } }) => {
      return typo.size.md;
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.bold;
    }};
  }
`;

export { TabContainer, ProfileBox, TabMenuList };
