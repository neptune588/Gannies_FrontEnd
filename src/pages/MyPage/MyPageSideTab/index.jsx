import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import uuid from 'react-uuid';

import {
  SideTabMenuWrapper,
  SideTabTitle,
  SideTabMenuBox,
  SideTabMenuList,
} from '@/pages/MyPage/MyPageSideTab/style';

import { myPageTabMenuData } from '@/pages/MyPage/MyPageSideTab/data';

import { useEventHandler } from '@/hooks/useEventHandler';

export default function MyPageSideTab() {
  const navigate = useNavigate();
  const location = useLocation();

  const [tabMenuData] = useState(myPageTabMenuData);

  const { clickChangeState: currentActiveTabMenu, handleClickChange } =
    useEventHandler();

  useEffect(() => {
    const path = location.pathname.split('/mypage')[1];
    console.log(path);

    if (path === '/profile/edit') {
      handleClickChange(tabMenuData[0].label);
    } else if (path === '/profile/change-password') {
      handleClickChange(tabMenuData[1].label);
    } else if (path === '/written-posts') {
      handleClickChange(tabMenuData[2].label);
    } else if (path === '/scrap-posts') {
      handleClickChange(tabMenuData[3].label);
    } else if (path === '/written-comment') {
      handleClickChange(tabMenuData[4].label);
    }
  }, []);

  return (
    <SideTabMenuWrapper>
      <SideTabTitle>내정보 관리</SideTabTitle>
      <SideTabMenuBox>
        <SideTabMenuList
          $currentActiveMenu={currentActiveTabMenu}
          $ownMenu={tabMenuData[0].label}
          onClick={() => {
            handleClickChange(tabMenuData[0].label);
            navigate(tabMenuData[0].path);
          }}
        >
          {tabMenuData[0].label}
        </SideTabMenuList>
        <SideTabMenuList
          $currentActiveMenu={currentActiveTabMenu}
          $ownMenu={tabMenuData[1].label}
          onClick={() => {
            handleClickChange(tabMenuData[1].label);
            navigate(tabMenuData[1].path);
          }}
        >
          {tabMenuData[1].label}
        </SideTabMenuList>
      </SideTabMenuBox>
      <SideTabTitle>게시물 관리</SideTabTitle>
      <SideTabMenuBox>
        <SideTabMenuList
          $currentActiveMenu={currentActiveTabMenu}
          $ownMenu={tabMenuData[2].label}
          onClick={() => {
            handleClickChange(tabMenuData[2].label);
            navigate(tabMenuData[2].path);
          }}
        >
          {tabMenuData[2].label}
        </SideTabMenuList>
        <SideTabMenuList
          $currentActiveMenu={currentActiveTabMenu}
          $ownMenu={tabMenuData[3].label}
          onClick={() => {
            handleClickChange(tabMenuData[3].label);
            navigate(tabMenuData[3].path);
          }}
        >
          {tabMenuData[3].label}
        </SideTabMenuList>
      </SideTabMenuBox>
      <SideTabTitle>댓글 관리</SideTabTitle>
      <SideTabMenuBox>
        <SideTabMenuList
          $currentActiveMenu={currentActiveTabMenu}
          $ownMenu={tabMenuData[4].label}
          onClick={() => {
            handleClickChange(tabMenuData[4].label);
            navigate(tabMenuData[4].path);
          }}
        >
          {tabMenuData[4].label}
        </SideTabMenuList>
      </SideTabMenuBox>
    </SideTabMenuWrapper>
  );
}
