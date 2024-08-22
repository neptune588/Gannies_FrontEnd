import { useState } from 'react';

import CommunityBanner from '@/pages/Community/CommunityBanner';
import CommunityPost from '@/pages/Community/CommunityPost';
import PageControlArrow from '@/components/PageControlArrow';
import PageNumber from '@/components/PageNumber';
import brush from '@/assets/icons/etc/brush.svg';
import bottomArraow from '@/assets/icons/arrows/chevron_down.svg';

import prevArrow from '@/assets/icons/arrows/chevron_left.svg';
import nextArrow from '@/assets/icons/arrows/chevron_right.svg';
import prev10PagesArrow from '@/assets/icons/arrows/double_chevron_lef.svg';
import next10PagesArrow from '@/assets/icons/arrows/double_chevron_right.svg';

import {
  BannerTitle,
  BannerText,
  ContentsAlignBox,
  PostCreateButton,
  SelectBox,
  PostWrapper,
  PostHeaderBox,
  PageWrapper,
  ArrowBox,
  PageNumberBox,
} from '@/pages/Community/style';

export default function Community() {
  const [tempData] = useState(
    Array.from({ length: 10 }, (_, index) => {
      return index;
    })
  );

  const [tempPageNumber, setTempPageNumber] = useState(0);
  const handlePageClick = (idx) => {
    return () => {
      setTempPageNumber(idx);
    };
  };
  return (
    <>
      <CommunityBanner>
        <BannerTitle>실습정보</BannerTitle>
        <BannerText>실습에 관련한 유용한 정보를 제공합니다.</BannerText>
      </CommunityBanner>
      <ContentsAlignBox>
        <PostCreateButton to='/community/create-post'>
          <img src={brush} alt='create-button' />
          게시글 작성
        </PostCreateButton>
        <SelectBox>
          <div>
            <p>최신순</p>
            <img src={bottomArraow} alt='select-arrow' />
          </div>
        </SelectBox>
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
        <ArrowBox>
          <PageControlArrow arrowImg={prevArrow} alt={'prev-button'} />
          <PageControlArrow
            arrowImg={prev10PagesArrow}
            alt={'prev-10pages-button'}
          />
        </ArrowBox>
        <PageNumberBox>
          {tempData.map((item, idx) => {
            return (
              <PageNumber
                key={item + 'pageNumber'}
                myNumber={idx}
                activeNumber={tempPageNumber}
                onClick={handlePageClick(idx)}
              />
            );
          })}
        </PageNumberBox>
        <ArrowBox>
          <PageControlArrow arrowImg={nextArrow} alt={'next-button'} />
          <PageControlArrow
            arrowImg={next10PagesArrow}
            alt={'next-10pages-button'}
          />
        </ArrowBox>
      </PageWrapper>
    </>
  );
}
