import { useState } from 'react';

import SideTabMenu from '@/pages/MyPage/SideTabMenu';
import PersonalInfo from '@/pages/MyPage/PersonalInfo';
import PasswordChange from '@/pages/MyPage/PasswordChange';
import AlignSelectMenu from '@/components/AlignSelectMenu';
import PostContents from '@/pages/MyPage/PostContents';

import {
  Title,
  ContentsContainer,
  SideTabMenuWrapper,
  MainContentsWrapper,
  ActiveTabTitleBox,
  ActiveTabTitle,
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
              <ActiveTabTitleBox>
                <ActiveTabTitle>
                  {'회원' + tabMenuData[0].content}
                </ActiveTabTitle>
              </ActiveTabTitleBox>
              <form>
                <PersonalInfo />
              </form>
            </>
          )}
          {activeMenu === tabMenuData[1].content && (
            <>
              <ActiveTabTitleBox>
                <ActiveTabTitle>{tabMenuData[1].content}</ActiveTabTitle>
              </ActiveTabTitleBox>
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
              <ActiveTabTitleBox>
                <div>
                  <ActiveTabTitle>{tabMenuData[2].content}</ActiveTabTitle>
                  <p>총 n개</p>
                </div>
                <AlignSelectMenu />
              </ActiveTabTitleBox>
              <PostContents />
            </>
          )}
          {activeMenu === tabMenuData[3].content && (
            <>
              <ActiveTabTitleBox>
                <ActiveTabTitle>{tabMenuData[3].content}</ActiveTabTitle>
              </ActiveTabTitleBox>
            </>
          )}
          {activeMenu === tabMenuData[4].content && (
            <>
              <ActiveTabTitleBox>
                <ActiveTabTitle>{tabMenuData[4].content}</ActiveTabTitle>
              </ActiveTabTitleBox>
            </>
          )}
        </MainContentsWrapper>
      </ContentsContainer>
    </>
  );
}
