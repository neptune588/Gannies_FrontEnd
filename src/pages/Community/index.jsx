import { useState, useEffect } from 'react';
import uuid from 'react-uuid';

//component
import CommunityPost from '@/pages/Community/CommunityPost';
import CommunityBanner from '@/components/CommunityBanner';
import CommunityBannerText from '@/components/CommunityBannerText';
import Pagination from '@/components/Pagination';
import AlignSelectMenu from '@/components/AlignSelectMenu';

//svg
import brush from '@/assets/icons/etc/brush.svg';

//styles
import {
  ContentsAlignBox,
  PostCreateButton,
  TableWrapper,
  TableHeader,
  PageWrapper,
} from '@/pages/Community/style';

//hooks
import { useEventHandler } from '@/hooks/useEventHandler';
import useSelectorList from '@/hooks/useSelectorList';

//api
import { getPosts } from '@/api/postApi';

//utils
import { formatDateToPost } from '@/utils/dateFormatting';
import { communityPostMaxLimit } from '@/utils/itemLimit';

export default function Community() {
  const [currentPosts, setCurrentPosts] = useState([]);
  const [pageTotalNumbers, setPageTotalNumbers] = useState([]);

  const {
    changeValue: currentPageNumber,
    handleChange: handlePageNumberClick,
  } = useEventHandler({ changeDefaultValue: 0 });

  const { currentBoardType } = useSelectorList();

  useEffect(() => {
    (async () => {
      const query = {
        page: currentPageNumber,
        limit: communityPostMaxLimit,
      };

      try {
        const res = await getPosts(currentBoardType, query);

        const { items: posts, totalItems } = res.data;

        setCurrentPosts(posts);
        setPageTotalNumbers(
          Array.from(
            { length: Math.ceil(totalItems / communityPostMaxLimit) },
            (_, i) => i + 1
          )
        );
      } catch (err) {
        console.error(err);
      }
    })();
  }, [currentBoardType]);

  useEffect(() => {
    console.log(pageTotalNumbers);
  }, [pageTotalNumbers]);
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
            {currentPosts?.map((post, idx) => {
              return (
                <CommunityPost
                  key={uuid()}
                  number={String(
                    currentPageNumber * communityPostMaxLimit + (idx + 1)
                  ).padStart(2, '0')}
                  title={post.title}
                  nickname={post.user.nickname}
                  createDate={formatDateToPost(post.createdAt)}
                  postViewCount={parseInt(post.viewCounts, 10)}
                  likeCount={parseInt(post.likeCounts, 10)}
                  numberOfCommentsAndReplies={post.numberOfCommentsAndReplies}
                />
              );
            })}
          </tbody>
        </table>
      </TableWrapper>
      <PageWrapper>
        <Pagination
          pageTotalNumbers={pageTotalNumbers}
          currentPageNumber={currentPageNumber}
          handlePageNumberClick={handlePageNumberClick}
        />
      </PageWrapper>
    </>
  );
}
