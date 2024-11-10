import { useEffect, useRef, useState, useCallback } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';

import CommunityBanner from '@/components/CommunityBanner';
import CommunityBannerText from '@/components/CommunityBannerText';
import PageCategory from '@/components/PageCategory';
import PostTitleSection from '@/pages/PostDetail/PostHeader/PostTitleSection';
import PostInfo from '@/pages/PostDetail/PostHeader/PostInfo';
import Attachments from '@/pages/PostDetail/PostHeader/Attachments';
import CommentCreate from '@/pages/PostDetail/CommentCreate';
import PostCommentArea from '@/pages/PostDetail/PostCommentArea';
import OtherPosts from '@/pages/PostDetail/OtherPosts';
import { PostDeleteModal } from '@/pages/PostDetail/Modals';
import { ReportModal } from '@/pages/PostDetail/Modals';

import {
  PageCategorySection,
  ContentsWrapper,
  PostHeaderBox,
  Nickname,
  NicknameBox,
  HospitalName,
  PostContentBox,
  IconBox,
  LikeButton,
  CommentArea,
  CommentLengthView,
  CommentCreateBox,
} from '@/pages/PostDetail/style';

import useEventHandler from '@/hooks/useEventHandler';
import useSelectorList from '@/hooks/useSelectorList';
import useFetchAndPaginate from '@/hooks/useFetchAndPaginate';
import useModalsControl from '@/hooks/useModalsControl';

import { getPost, getPosts, deletePost } from '@/api/postApi';
import { getComments } from '@/api/commentApi';
import { postScrap, cancelPostScrap } from '@/api/scrapApi';
import { postLikeToggle } from '@/api/likeApi';

import {
  commentMaxLimit,
  communityPostMaxLimit,
  pageViewLimit,
} from '@/utils/itemLimit';

export default function PostDetail() {
  const { boardType, postId } = useParams();

  const navigate = useNavigate();

  const firstRunBlockToSetPageEffect = useRef(true);
  const firstRunBlockToSetOtherPostsPageEffect = useRef(true);
  const firstRunBlockToResetEffect = useRef(true);

  const {
    isPostDeleteModal,
    isPostOrCommentReportModal,
    bannerTitle,
    comentWrapperLocation,
  } = useSelectorList();

  const { handleModalClose } = useModalsControl();

  const {
    items: comments,
    totalItems: totalCommentsLength,
    itemMaxLimit: commentViewMaxLimit,
    pageTotalNumbers: commentPageTotalNumbers,
    currentPageNumber: currentCommentPageNumber,
    groupedPageNumbers: commentPageNumbers,
    setCurrentGroupOrder: resetCommentPageGroupOrder,
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
    pageTotalNumbers: otherPageTotalNumbers,
    currentPageNumber: otherPostsCurrentPageNumber,
    groupedPageNumbers: otherPostsPageNumbers,
    setCurrentGroupOrder: resetOtherPostsPageGroupOrder,
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
  const [curruentReportData, setCurrentReportData] = useState({
    postId: postId,
    commentId: null,
    replyCommentId: null,
  });
  const [isMorePopup, setIsMorePopup] = useState(false);
  const [actionType, setActionType] = useState(null);
  const [isEditOn, setIsEditOn] = useState(false);

  //포스트 갱신
  const postReqeust = () => {
    return getPost(boardType, postId);
  };

  //댓글 갱신 (모달 상태 초기화)
  const commentReqeust = (commentRequestPage = currentCommentPageNumber) => {
    return getDataAndSetPageNumbers(() => {
      return getComments(boardType, postId, {
        page: commentRequestPage,
        limit: pageViewLimit,
        withReplies: true,
      });
    });
  };

  //다른 게시물 + 페이지 갱신
  const otherPostsRequest = () => {
    return getOtherPostsAndSetPageNumbers(() =>
      getPosts(boardType, {
        page: otherPostsCurrentPageNumber,
        limit: communityPostMaxLimit,
      })
    );
  };

  const itemChangeToPost = (data) => {
    setPost({
      title: data.title,
      content: data.content,
      category: data.category,
      hospitalNames: data.hospitalNames, //default null
      numberOfComments: data.numberOfComments,
      postId: data.postId,
      posterId: data.user.userId,
      nickname: data.user.nickname,
      createDate: data.createdAt,
      updateDate: data.updatedAt,
      likeCounts: data.likeCounts,
      viewCounts: data.viewCounts,
      isLiked: data.isLiked,
      isScraped: data.isScraped,
      fileUrls: data.fileUrls,
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

  const requestAll = async (commentRequestPage) => {
    try {
      const res = await axios.all([
        postReqeust(),
        commentReqeust(commentRequestPage),
        otherPostsRequest(),
      ]);
      itemChangeToPost(res[0].data);
    } catch (error) {
      console.log(error);
    }
  };

  //postId가 바뀌거나 (새로운 게시글 눌렀을떄)
  //답글이나 댓글을 달았을시
  const dataReset = useCallback(
    ({
      commentRequestPage = 1,
      otherPostRequestPage = 1,
      commentPageGroup = 0,
      otherPostsPageGroup = 0,
    } = {}) => {
      resetCommentCurrentPage(commentRequestPage);
      resetOtherPostsCurrentPage(otherPostRequestPage);

      resetCommentPageGroupOrder(commentPageGroup);
      resetOtherPostsPageGroupOrder(otherPostsPageGroup);
      setCurrentReportData({
        postId: postId,
        commentId: null,
        replyCommentId: null,
      });
      setIsMorePopup(false);
      handleChange('');
      requestAll(commentRequestPage);
    },
    [postId]
  );

  const handlePostDelete = async () => {
    try {
      await deletePost(boardType, postId);
      alert('해당 글이 삭제되었습니다.');
      navigate(`/community/${boardType}`);
      handleModalClose({ modalName: 'isPostDeleteModal' });
    } catch (error) {
      alert('게시글을 삭제하는데 실패 하였습니다.');
      console.error(error);
    }
  };

  const handleEditOpen = () => {
    setIsMorePopup(false);
    setIsEditOn((prev) => !prev);
  };

  const commentPageGroupReCalc = useCallback(
    (number) => {
      let changeGroupOrder = null;

      commentPageTotalNumbers.forEach((arr, arrIdx) => {
        if (arr.includes(number)) {
          changeGroupOrder = arrIdx;
        }
      });

      const condition = number % pageViewLimit;
      if (condition === 0) {
        return changeGroupOrder + 1;
      } else if (condition > 0) {
        return changeGroupOrder;
      } else {
        return undefined;
      }
    },
    [commentPageTotalNumbers]
  );

  useEffect(() => {
    requestAll();
  }, []);

  useEffect(() => {
    if (firstRunBlockToSetPageEffect.current) {
      firstRunBlockToSetPageEffect.current = false;
      return;
    }

    if (actionType === 'pageMove') {
      commentReqeust();
    }
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

  useEffect(() => {
    //console.log(commentBoxLocation);
    //actiyp Change => data reqeust => comment data change => commentLocation calc => commentLocation change => useEffect
    if (actionType === 'createComment') {
      window.scroll({
        top: comentWrapperLocation.bottom,
        left: 0,
      });
    }

    if (actionType === 'pageMove') {
      window.scroll({
        top: comentWrapperLocation.top,
        left: 0,
      });
    }
    setActionType('');
  }, [comentWrapperLocation]);

  if (isEditOn) {
    return (
      <Navigate
        to={`/community/${post.category}/create-community-post`}
        state={{
          type: 'isEdit',
          title: post.title,
          content: post.content,
          boardTitle: bannerTitle,
          boardType: post.category,
          hospitalNames: post.hospitalNames,
          postId: post.postId,
          fileUrls: post.fileUrls,
        }}
      />
    );
  }
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
        <PageCategory currentBoardType={boardType} />
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
            handleEditOpen={handleEditOpen}
          />
          <NicknameBox>
            <Nickname>{post.nickname}</Nickname>
            {post.hospitalNames && (
              <HospitalName>{post.hospitalNames[0]}</HospitalName>
            )}
          </NicknameBox>
          <PostInfo
            postViewCount={post.viewCounts}
            likeCount={post.likeCounts}
            commentCount={post.numberOfComments}
            postCreateDate={post.createDate}
            postUpdateDate={post.updateDate}
          />
          {post.fileUrls?.attachments.length > 0 && (
            <Attachments attachments={post.fileUrls.attachments} />
          )}
        </PostHeaderBox>
        <PostContentBox>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />
        </PostContentBox>
        <IconBox>
          <LikeButton
            onClick={() => {
              handleScrapOrLikeClick('like');
            }}
            $isLikeClick={post.isLiked}
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
              lastNumberCalc={() => {
                return (
                  commentPageTotalNumbers?.length > 0 &&
                  commentPageTotalNumbers.at(-1).at(-1)
                );
              }}
              commentLengthCalc={() => {
                //items length로 하지않는 이유는
                //items는 현재 활성화 페이지 기준으로 들어오는것인데
                //내가 댓글을 작성했을시 항상 마지막 페이지 기준으로 들어가므로
                //예컨데 1페이지는 10개지만 2페이지는 9개인경우는?
                //item 갯수를 commentLength로 해버리면 안되기때문에
                //나머지로 계산
                return totalCommentsLength % commentViewMaxLimit;
              }}
              commentPageGroupReCalc={commentPageGroupReCalc}
              dataReset={dataReset}
              setActionType={setActionType}
              handleChange={handleChange}
            />
          </CommentCreateBox>
        </CommentArea>
        <PostCommentArea
          comments={comments}
          pageNumbers={commentPageNumbers}
          currentPageNumber={currentCommentPageNumber}
          setContentType={setContentType}
          setReportedContent={setReportedContent}
          setCurrentReportData={setCurrentReportData}
          setActionType={setActionType}
          commentPageGroupReCalc={commentPageGroupReCalc}
          dataReset={dataReset}
          handlePageNumberClick={handlePageNumberClick}
          handlePrevPageClick={handlePrevPageClick}
          handleNextPageClick={handleNextPageClick}
        />
        <OtherPosts
          currentPostId={postId}
          currentBoardType={boardType}
          posts={otherPosts}
          pageNumbers={otherPostsPageNumbers}
          currentPageNumber={otherPostsCurrentPageNumber}
          otherPageTotalNumbers={otherPageTotalNumbers}
          handlePrevPageClick={handleOtherPostsPrevPageClick}
          handleNextPageClick={handleOtherPostsNextPageClick}
          handlePageNumberClick={handleOtherPostsPageNumberClick}
        />
      </ContentsWrapper>
    </>
  );
}
