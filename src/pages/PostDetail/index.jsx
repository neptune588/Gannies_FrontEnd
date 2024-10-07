import { useEffect, useRef, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import CommunityBanner from '@/components/CommunityBanner';
import CommunityBannerText from '@/components/CommunityBannerText';
import PageCategory from '@/components/PageCategory';
import PostTitleSection from '@/pages/PostDetail/PostHeader/PostTitleSection';
import PostInfo from '@/pages/PostDetail/PostHeader/PostInfo';
import CommentCreate from '@/pages/PostDetail/CommentCreate';
import PostCommentArea from '@/pages/PostDetail/PostCommentArea';
import OtherPosts from '@/pages/PostDetail/OtherPosts';
import { PostDeleteModal } from '@/pages/PostDetail/Modals';
import { ReportModal } from '@/pages/PostDetail/Modals';

import heartActive from '@/assets/icons/hearts/heart_active.svg';
import heartInActive from '@/assets/icons/hearts/heart_inactive.svg';

import {
  PageCategorySection,
  ContentsWrapper,
  PostHeaderBox,
  Nickname,
  PostContentBox,
  IconBox,
  CommentArea,
  CommentLengthView,
  CommentCreateBox,
} from '@/pages/PostDetail/style';

import useEventHandler from '@/hooks/useEventHandler';
import useSelectorList from '@/hooks/useSelectorList';
import useFetchAndPaginate from '@/hooks/useFetchAndPaginate';

import { getPost, getPosts, deletePost } from '@/api/postApi';
import { getComments } from '@/api/commentApi';
import { postScrap, cancelPostScrap } from '@/api/scrapApi';
import { postLikeToggle } from '@/api/likeApi';

import { formatDateToPost } from '@/utils/dateFormatting';
import { commentMaxLimit } from '@/utils/itemLimit';
import { communityPostMaxLimit } from '@/utils/itemLimit';
import { pageViewLimit } from '@/utils/itemLimit';

export default function PostDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const firstRunBlockToSetPageEffect = useRef(true);
  const firstRunBlockToSetOtherPostsPageEffect = useRef(true);
  const firstRunBlockToResetEffect = useRef(true);

  const { currentBoardType, isPostDeleteModal, isPostOrCommentReportModal } =
    useSelectorList();

  const {
    items: comments,
    setItems: setComments,
    pageTotalNumbers: totalCommentPageNumbers,
    currentPageNumber: currentCommentPageNumber,
    groupedPageNumbers: commentPageNumbers,
    getDataAndSetPageNumbers,
    handlePageNumberClick,
    handlePrevPageClick,
    handleNextPageClick,
    setCurrentPageNumber: resetCommentCurrentPage,
  } = useFetchAndPaginate({
    defaultPageNumber: 1,
    itemMaxLimit: commentMaxLimit,
    pageViewLimit: pageViewLimit,
  });
  const {
    items: otherPosts,
    currentPageNumber: otherPostsCurrentPageNumber,
    groupedPageNumbers: otherPostsPageNumbers,
    getDataAndSetPageNumbers: getOtherPostsAndSetPageNumbers,
    handlePageNumberClick: handleOtherPostsPageNumberClick,
    handlePrevPageClick: handleOtherPostsPrevPageClick,
    handleNextPageClick: handleOtherPostsNextPageClick,
    setCurrentPageNumber: resetOtherPostsCurrentPage,
  } = useFetchAndPaginate({
    defaultPageNumber: 1,
    itemMaxLimit: communityPostMaxLimit,
    pageViewLimit,
  });
  const { changeValue, handleChange } = useEventHandler({
    changeDefaultValue: '',
  });

  const [post, setPost] = useState({});
  const [contentType, setContentType] = useState('');
  const [reportedContent, setReportedContent] = useState('');
  const [currentMoveLocation, setCurrentMoveLocation] = useState(null);
  const [curruentReportData, setCurrentReportData] = useState({
    postId: postId,
    commentId: null,
    replyCommentId: null,
  });
  const [isMorePopup, setIsMorePopup] = useState(false);

  //포스트 갱신
  const postReqeust = () => {
    return getPost(currentBoardType, postId);
  };

  //댓글 갱신 (모달 상태 초기화)
  const commentReqeust = () => {
    return getDataAndSetPageNumbers(() => {
      return getComments(currentBoardType, postId, {
        page: currentCommentPageNumber,
        limit: pageViewLimit,
        withReplies: true,
      });
    });
  };

  //다른 게시물 + 페이지 갱신
  const otherPostsRequest = () => {
    return getOtherPostsAndSetPageNumbers(() =>
      getPosts(currentBoardType, {
        page: otherPostsCurrentPageNumber,
        limit: communityPostMaxLimit,
      })
    );
  };

  const itemChangeToPost = (data) => {
    console.log(data);
    setPost({
      title: data.title,
      content: data.content,
      category: data.category,
      hospitalNames: data.hospitalNames, //default null
      numberOfComments: data.numberOfComments,
      postId: data.postId,
      posterId: data.user.userId,
      nickname: data.user.nickname,
      createDate: formatDateToPost(data.createdAt),
      updateDate: formatDateToPost(data.updatedAt),
      likeCounts: data.likeCounts,
      viewCounts: data.viewCounts,
      isLiked: data.isLiked,
      isScraped: data.isScraped,
    });
  };

  const handleScrapOrLikeClick = async (buttonType) => {
    try {
      switch (buttonType) {
        case 'scrap':
          if (post.isScraped) {
            await cancelPostScrap(post.postId);
          } else {
            await postScrap(post.postId);
          }
          break;

        case 'like':
          await postLikeToggle(post.postId);
          break;
      }

      const { data } = await postReqeust();
      itemChangeToPost(data);
    } catch (error) {
      console.error(error);
    }
  };

  const requestAll = async () => {
    try {
      const res = await axios.all([
        postReqeust(),
        commentReqeust(),
        otherPostsRequest(),
      ]);

      itemChangeToPost(res[0].data);
    } catch (error) {
      console.error(error);
    }
  };

  const dataReset = useCallback(() => {
    resetCommentCurrentPage(1);
    resetOtherPostsCurrentPage(1);
    requestAll();
    handleChange('');
    setCurrentReportData({
      postId: postId,
      commentId: null,
      replyCommentId: null,
    });
    setIsMorePopup(false);
  }, [postId]);

  const handlePostDelete = async () => {
    try {
      await deletePost(currentBoardType, postId);
      alert('해당 글이 삭제되었습니다.');
      navigate('/community');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    requestAll();
  }, []);

  useEffect(() => {
    if (firstRunBlockToSetPageEffect.current) {
      firstRunBlockToSetPageEffect.current = false;
      return;
    }

    commentReqeust();
    window.scroll({
      top: currentMoveLocation,
      left: 0,
    });
  }, [currentCommentPageNumber]);

  useEffect(() => {
    if (firstRunBlockToSetOtherPostsPageEffect.current) {
      firstRunBlockToSetOtherPostsPageEffect.current = false;
      return;
    }

    otherPostsRequest();
  }, [otherPostsCurrentPageNumber]);

  useEffect(() => {
    if (firstRunBlockToResetEffect.current) {
      firstRunBlockToResetEffect.current = false;
      return;
    }

    dataReset();
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
      });
    }, 20);
  }, [postId]);

  return (
    <>
      {isPostDeleteModal && (
        <PostDeleteModal
          handlePostDelete={handlePostDelete}
          setIsMorePopup={setIsMorePopup}
        />
      )}
      {isPostOrCommentReportModal && (
        <ReportModal
          contentType={contentType}
          reportedContent={reportedContent}
          curruentReportData={curruentReportData}
          setIsMorePopup={setIsMorePopup}
        />
      )}
      <CommunityBanner>
        <CommunityBannerText />
      </CommunityBanner>
      <PageCategorySection>
        <PageCategory />
      </PageCategorySection>
      <ContentsWrapper>
        <PostHeaderBox>
          <PostTitleSection
            postId={post.postId}
            postTitle={post.title}
            currentPosterId={post.posterId}
            isScraped={post.isScraped}
            isMorePopup={isMorePopup}
            setIsMorePopup={setIsMorePopup}
            setReportedContent={setReportedContent}
            setContentType={setContentType}
            setCurrentReportData={setCurrentReportData}
            handleScrapClick={() => {
              handleScrapOrLikeClick('scrap');
            }}
          />
          <Nickname>{post.nickname}</Nickname>
          <PostInfo
            postViewCount={post.viewCounts}
            likeCount={post.likeCounts}
            commentCount={post.numberOfComments}
            postCreateDate={post.createDate}
            postUpdateDate={post.updateDate}
          />
        </PostHeaderBox>
        <PostContentBox>
          <p>{post.content}</p>
        </PostContentBox>
        <IconBox
          onClick={() => {
            handleScrapOrLikeClick('like');
          }}
        >
          <img
            src={post.isLiked ? heartActive : heartInActive}
            alt='like-button'
          />
          <p>공감해요</p>
        </IconBox>
        <CommentArea>
          <CommentLengthView>댓글 {post.numberOfComments}개</CommentLengthView>
          <CommentCreateBox>
            <CommentCreate
              requestType={'create'}
              postId={post.postId}
              value={changeValue}
              dataReset={dataReset}
              handleChange={handleChange}
            />
          </CommentCreateBox>
        </CommentArea>
        <PostCommentArea
          comments={comments}
          currentPageNumber={currentCommentPageNumber}
          pageNumbers={commentPageNumbers}
          totalCommentPageNumbers={totalCommentPageNumbers}
          setContentType={setContentType}
          setReportedContent={setReportedContent}
          setCurrentMoveLocation={setCurrentMoveLocation}
          setCurrentReportData={setCurrentReportData}
          dataReset={dataReset}
          handlePageNumberClick={handlePageNumberClick}
          handlePrevPageClick={handlePrevPageClick}
          handleNextPageClick={handleNextPageClick}
        />
        <OtherPosts
          currentPostId={postId}
          posts={otherPosts}
          pageNumbers={otherPostsPageNumbers}
          currentPageNumber={otherPostsCurrentPageNumber}
          handlePrevPageClick={handleOtherPostsPrevPageClick}
          handleNextPageClick={handleOtherPostsNextPageClick}
          handlePageNumberClick={handleOtherPostsPageNumberClick}
        />
      </ContentsWrapper>
    </>
  );
}
