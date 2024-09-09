import Pagination from '@/components/Pagination';
import OtherPostList from '@/pages/PostDetail/OtherPostList';

import {
  PostsWrapper,
  PageWrapper,
  Title,
} from '@/pages/PostDetail/OtherPosts/style';

export default function OtherPosts({
  pageCountData,
  currentPageNumber,
  handlePageNumberChange,
  commentLength,
  currentPostId = 1,
  ownPostId = 2,
}) {
  return (
    <>
      <PostsWrapper>
        <Title>게시글 목록</Title>
        <table>
          <tbody>
            <OtherPostList />
            <OtherPostList />
            <OtherPostList />
            <OtherPostList />
            <OtherPostList />
            <OtherPostList />
            <OtherPostList />
            <OtherPostList />
            <OtherPostList />
            <OtherPostList />
          </tbody>
        </table>
      </PostsWrapper>
      <PageWrapper>
        <Pagination
          pageCountData={pageCountData}
          activePageNumber={currentPageNumber}
          handlePageNumberClick={handlePageNumberChange}
        />
      </PageWrapper>
    </>
  );
}
