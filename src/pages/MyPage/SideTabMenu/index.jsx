import styled from 'styled-components';

import { xsmall_500, xsmall_600 } from '@/styles/commonStyle/localTextStyle';

const SideTabTitle = styled.h2`
  color: ${({ theme: { colors } }) => {
    return colors.gray['100'];
  }};
  ${xsmall_600}
  padding-bottom: 10px;
  border-bottom: 1px solid
    ${({ theme: { colors } }) => {
      return colors.gray['20'];
    }};
`;

const SideTabMenuBox = styled.ul`
  padding: 15px 15px 0 15px;
`;

const SideTabMenuList = styled.li`
  cursor: pointer;
  user-select: none;
  color: ${({ $isActiveMenu, $isContent, theme: { colors } }) => {
    return $isActiveMenu === $isContent ? colors.primary : colors.gray['50'];
  }};
  ${xsmall_500}
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
      <SideTabTitle>내정보 관리</SideTabTitle>
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
      <SideTabTitle>게시글 관리</SideTabTitle>
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
      <SideTabTitle>댓글 관리</SideTabTitle>
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
