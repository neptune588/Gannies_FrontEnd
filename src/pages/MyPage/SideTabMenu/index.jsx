import styled from 'styled-components';

const SideTabMenuBox = styled.ul`
  padding: 15px 15px 0 15px;
`;

const SideTabMenuList = styled.li`
  cursor: pointer;
  user-select: none;
  color: ${({ $isActiveMenu, $isContent, theme: { colors } }) => {
    return $isActiveMenu === $isContent ? colors.primary : colors.gray['50'];
  }};
  font-size: ${({ theme: { typo } }) => {
    return typo.size.xs;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.medium;
  }};
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 35px;
  }
`;
export default function SideTabMenu({
  activeMenu = '정보수정',
  tabMenu,
  handleTabMenuClick,
}) {
  return (
    <>
      <h2>내정보 관리</h2>
      <SideTabMenuBox>
        <SideTabMenuList
          $isActiveMenu={activeMenu}
          $isContent={tabMenu[0].content}
          onClick={() => {
            handleTabMenuClick(tabMenu[0].content);
          }}
        >
          {tabMenu[0].content}
        </SideTabMenuList>
        <SideTabMenuList
          $isActiveMenu={activeMenu}
          $isContent={tabMenu[1].content}
          onClick={() => {
            handleTabMenuClick(tabMenu[1].content);
          }}
        >
          {tabMenu[1].content}
        </SideTabMenuList>
      </SideTabMenuBox>
      <h2>게시글 관리</h2>
      <SideTabMenuBox>
        <SideTabMenuList
          $isActiveMenu={activeMenu}
          $isContent={tabMenu[2].content}
          onClick={() => {
            handleTabMenuClick(tabMenu[2].content);
          }}
        >
          {tabMenu[2].content}
        </SideTabMenuList>
        <SideTabMenuList
          $isActiveMenu={activeMenu}
          $isContent={tabMenu[3].content}
          onClick={() => {
            handleTabMenuClick(tabMenu[3].content);
          }}
        >
          {tabMenu[3].content}
        </SideTabMenuList>
      </SideTabMenuBox>
      <h2>댓글 관리</h2>
      <SideTabMenuBox>
        <SideTabMenuList
          $isActiveMenu={activeMenu}
          $isContent={tabMenu[4].content}
          onClick={() => {
            handleTabMenuClick(tabMenu[4].content);
          }}
        >
          {tabMenu[4].content}
        </SideTabMenuList>
      </SideTabMenuBox>
    </>
  );
}
