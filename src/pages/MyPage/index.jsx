import { useState } from 'react';

import SideTabMenu from '@/pages/MyPage/MyPageSideTab';
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
import { posts } from '@/pages/Home/data';

export default function MyPage() {

  const [pageData] = useState(
    Array.from({ length: 10 }, (_, index) => {
      return index;
    })
  );

  const [tempPageNumber, setTempPageNumber] = useState(0);
  const handlePageClick = (idx) => {
    setTempPageNumber(idx);
  };

  return (
    <>

          {activeMenu === tabMenuData[2].content && (
            <>
              <ActiveTabTitleBox>
                <div>
                  <ActiveTabTitle>{tabMenuData[2].content}</ActiveTabTitle>
                  <p>총 n개</p>
                </div>
                <AlignSelectMenu />
              </ActiveTabTitleBox>
              <PostContents
                postData={postData}
                pageName={'my-page'}
                scrapViewState={false}
                activePageNumber={tempPageNumber}
                pageNumberData={pageData}
                handlePageNumberClick={handlePageClick}
              />
            </>
          )}
          {activeMenu === tabMenuData[3].content && (
            <>
              <ActiveTabTitleBox>
                <div>
                  <ActiveTabTitle>{tabMenuData[3].content}</ActiveTabTitle>
                  <p>총 n개</p>
                </div>
                <AlignSelectMenu />
              </ActiveTabTitleBox>
              <PostContents
                postData={postData}
                pageName={'my-page'}
                scrapViewState={true}
                scrapClickState={true}
                activePageNumber={tempPageNumber}
                pageNumberData={pageData}
                handlePageNumberClick={handlePageClick}
              />
            </>
          )}
          {activeMenu === tabMenuData[4].content && (
            <>
              <ActiveTabTitleBox>
                <div>
                  <ActiveTabTitle>{tabMenuData[4].content}</ActiveTabTitle>
                  <p>총 n개</p>
                </div>
                <AlignSelectMenu />
              </ActiveTabTitleBox>
              <PostContents
                postData={postData}
                pageName={'my-page'}
                scrapViewState={false}
                activePageNumber={tempPageNumber}
                pageNumberData={pageData}
                handlePageNumberClick={handlePageClick}
              />
            </>
          )}
        </MainContentsWrapper>
      </ContentsContainer>
    </>
  );
}
