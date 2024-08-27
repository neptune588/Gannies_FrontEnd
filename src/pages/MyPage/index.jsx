import { useState } from 'react';

import SideTabMenu from '@/pages/MyPage/SideTabMenu';
import PersonalInfo from '@/pages/MyPage/PersonalInfo';
import PasswordChange from '@/pages/MyPage/PasswordChange';
import PostList from '@/components/PostList';

import {
  Title,
  ContentsContainer,
  SideTabMenuWrapper,
  MainContentsWrapper,
} from '@/pages/MyPage/style';

import { tabMenuData } from '@/pages/MyPage/data';

export default function MyPage() {
  const [activeMenu, setActiveMenu] = useState(tabMenuData[0].content);
  const handleTabMenuClick = (content) => {
    setActiveMenu(content);
  };

  const [passwordView, setPasswordView] = useState(true);
  const handlePasswordViewClick = () => {
    setPasswordView((prev) => !prev);
    console.log(passwordView);
  };

  return (
    <>
      <Title>마이페이지</Title>
      <ContentsContainer>
        <SideTabMenuWrapper>
          <SideTabMenu
            activeMenu={activeMenu}
            tabMenu={tabMenuData}
            handleTabMenuClick={handleTabMenuClick}
          />
        </SideTabMenuWrapper>
        <MainContentsWrapper>
          {activeMenu === tabMenuData[0].content && (
            <>
              <h2>{'회원' + tabMenuData[0].content}</h2>
              <form>
                <PersonalInfo />
              </form>
            </>
          )}
          {activeMenu === tabMenuData[1].content && (
            <>
              <h2>{tabMenuData[1].content}</h2>
              <form>
                <PasswordChange
                  passwordView={passwordView}
                  handlePasswordViewClick={handlePasswordViewClick}
                />
              </form>
            </>
          )}
          {activeMenu === tabMenuData[2].content && (
            <>
              <h2>{tabMenuData[2].content}</h2>
              <PostList posts={5}></PostList>
            </>
          )}
          {activeMenu === tabMenuData[3].content && (
            <>
              <h2>{tabMenuData[3].content}</h2>
            </>
          )}
          {activeMenu === tabMenuData[4].content && (
            <>
              <h2>{tabMenuData[4].content}</h2>
            </>
          )}
        </MainContentsWrapper>
      </ContentsContainer>
    </>
  );
}
