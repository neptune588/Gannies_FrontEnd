import { useState } from 'react';

import CommunityPost from '@/pages/Community/CommunityPost';
import CommunityBanner from '@/components/CommunityBanner';
import CommunityBannerText from '@/components/CommunityBannerText';
import Pagination from '@/components/Pagination';
import AlignSelectMenu from '@/components/AlignSelectMenu';
import brush from '@/assets/icons/etc/brush.svg';

import {
  ContentsAlignBox,
  PostCreateButton,
  PostWrapper,
  PostHeaderBox,
  PageWrapper,
} from '@/pages/Community/style';

export default function Community() {
  const [tempData] = useState(
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
      <CommunityBanner>
        <CommunityBannerText
          title='실습정보'
          text='실습에 관련된 유용한 정보를 제공합니다.'
        ></CommunityBannerText>
      </CommunityBanner>
      <ContentsAlignBox>
        <PostCreateButton to='/community/create-community-post'>
          <img src={brush} alt='create-button' />
          게시글 작성
        </PostCreateButton>
        <AlignSelectMenu />
      </ContentsAlignBox>
      <PostWrapper>
        <PostHeaderBox>
          <div>
            <p>번호</p>
            <p>제목</p>
          </div>
          <div>
            <p>날짜/조회수/좋아요 수</p>
          </div>
        </PostHeaderBox>
      </PostWrapper>
      <ul>
        {tempData.map((item) => {
          return <CommunityPost key={item + 'post'} />;
        })}
      </ul>
      <PageWrapper>
        <Pagination
          pageNumberData={tempData}
          activePageNumber={tempPageNumber}
          handlePageNumberClick={handlePageClick}
        />
      </PageWrapper>
    </>
  );
}
