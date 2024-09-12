import { useState, useEffect } from 'react';
import uuid from 'react-uuid';

import CommunityPost from '@/pages/Community/CommunityPost';
import CommunityBanner from '@/components/CommunityBanner';
import CommunityBannerText from '@/components/CommunityBannerText';
import Pagination from '@/components/Pagination';
import AlignSelectMenu from '@/components/AlignSelectMenu';

import brush from '@/assets/icons/etc/brush.svg';

import {
  ContentsAlignBox,
  PostCreateButton,
  TableWrapper,
  TableHeader,
  PageWrapper,
} from '@/pages/Community/style';

import { getPosts } from '@/api/postApi';

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
        <CommunityBannerText />
      </CommunityBanner>
      <TableWrapper>
        <ContentsAlignBox>
          <PostCreateButton to='/community/create-community-post'>
            <img src={brush} alt='create-button' />
            게시글 작성
          </PostCreateButton>
          <AlignSelectMenu />
        </ContentsAlignBox>
        <table>
          <thead>
            <TableHeader>
              <th>
                <p>번호</p>
                <p>제목</p>
              </th>
              <th>
                <p>닉네임/날짜/조회수/좋아요 수</p>
              </th>
            </TableHeader>
          </thead>
          <tbody>
            {tempData.map((item) => {
              return <CommunityPost key={uuid()} />;
            })}
          </tbody>
        </table>
      </TableWrapper>
      <PageWrapper>
        <Pagination
          pageCountData={tempData}
          activePageNumber={tempPageNumber}
          handlePageNumberClick={handlePageClick}
        />
      </PageWrapper>
    </>
  );
}
