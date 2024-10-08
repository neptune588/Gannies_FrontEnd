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
  const [commentBoxLocation, setCommentBoxLocation] = useState({});
  const [curruentReportData, setCurrentReportData] = useState({
    postId: postId,
    commentId: null,
    replyCommentId: null,
  });
  const [isMorePopup, setIsMorePopup] = useState(false);
  const [actionType, setActionType] = useState(null);

  //포스트 갱신
  const postReqeust = () => {
    return getPost(currentBoardType, postId);
  };

  //댓글 갱신 (모달 상태 초기화)
  const commentReqeust = (commentRequestPage = currentCommentPageNumber) => {
    return getDataAndSetPageNumbers(() => {
      return getComments(currentBoardType, postId, {
        page: commentRequestPage,
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

  const requestAll = async (commentRequestPage) => {
    try {
      const res = await axios.all([
        postReqeust(),
        commentReqeust(commentRequestPage),
        otherPostsRequest(),
      ]);

      itemChangeToPost(res[0].data);
    } catch (error) {
      console.error(error);
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
      setActionType('createComment');
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
      await deletePost(currentBoardType, postId);
      alert('해당 글이 삭제되었습니다.');
      navigate('/community');
    } catch (error) {
      console.error(error);
    }
  };

  const nextCommentPageGroupCalc = () => {
    //마지막페이지가 10페이지이상이나 20페이지이상이...면서
    //댓글을 작성했을때 마지막페이지의 comment갯수가 10개이면 그 다음 페이지 그룹으로 넘어가게
    //lastpage = > commentPageTotalNumbers.at(-1).at(-1);
    //lastpage가 속해있는 그룹의 인덱스에서 + 1를 구해봐야한다.
    //foreach문과 includes 쓰면 될것같기도?

    const lastPageNumber = commentPageTotalNumbers.at(-1).at(-1);
    let changeGroupOrder = null;

    commentPageTotalNumbers.forEach((arr, arrIdx) => {
      if (arr.includes(lastPageNumber)) {
        changeGroupOrder = arrIdx;
      }
    });

    console.log(`마지막 번호는: ${lastPageNumber}`);
    console.log(`마지막 번호가 속한 그룹은: ${changeGroupOrder}`);
    //고려해야 될것
    //1. lastPage가 10일 경우는 changeGroupOrder + 1 해서 다음 그룹을 꺼내주는게 맞다
    //2. lastPage가 11~19 일 경우는 changeGroupOrder 그대로 꺼내주는게 맞다.
    //이러한점을 고려하여 조건식을 세워보면?

    // 나머지가 0이다 lastnumber가 10 20 30이라는거니까 그룹오더 +1해서
    // 11, 21, 31 등이있는 그룹으로 이동
    // 나머지가 0상이다 lastnumber가 11, 21, 31이라는거니까 그룹오더 그대로
    // 그외엔 undfined해서 기본값
    const condition = lastPageNumber % pageViewLimit;
    if (condition === 0) {
      return changeGroupOrder + 1;
    } else if (condition > 0) {
      return changeGroupOrder;
    } else {
      undefined;
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

  /*   useEffect(() => {
    //commentBoxLocation이 바꼇다는말은 commentArea가 갱신됐다는말
    //갱신은 언제? 페이지 이동으로 인한 데이트 업데이트 or 댓글 작성
    //console.log('코멘트 데이터 갱신', commentBoxLocation.top, actionType);
    if (actionType === 'pageMove') {
      window.scroll({
        top: commentBoxLocation.top,
        left: 0,
      });
    }
  }, [commentBoxLocation]); */

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
              lastNumberCalc={() => {
                return commentPageTotalNumbers.at(-1).at(-1);
              }}
              commentLengthCalc={() => {
                console.log('댓글 총 ', totalCommentsLength, '개');
                //items length로 하지않는 이유는
                //items는 현재 활성화 페이지 기준으로 들어오는것인데
                //내가 댓글을 작성했을시 항상 마지막 페이지 기준으로 들어가므로
                //예컨데 1페이지는 10개지만 2페이지는 9개인경우는?
                //item 갯수를 commentLength로 해버리면 안되기때문에
                //나머지로 계산
                return totalCommentsLength % commentViewMaxLimit;
              }}
              nextCommentPageGroupCalc={nextCommentPageGroupCalc}
              dataReset={dataReset}
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
          setCommentBoxLocation={setCommentBoxLocation}
          setCurrentReportData={setCurrentReportData}
          setActionType={setActionType}
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
          otherPageTotalNumbers={otherPageTotalNumbers}
          handlePrevPageClick={handleOtherPostsPrevPageClick}
          handleNextPageClick={handleOtherPostsNextPageClick}
          handlePageNumberClick={handleOtherPostsPageNumberClick}
        />
      </ContentsWrapper>
    </>
  );
}
