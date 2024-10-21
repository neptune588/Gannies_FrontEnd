import { PopupBox, PopupList } from '@/pages/PostDetail/MorePopup/style';

import useModalsControl from '@/hooks/useModalsControl';

export default function MorePopup({
  ownComment,
  ownPost,
  contentType,
  postId,
  commentId,
  replyId,
  reportedContent,
  setContentType,
  setReportedContent,
  setCurrentReportData,
  setIsMorePopup,
  handleEditOpen,
  handleCommentDelete,
}) {
  const { handleModalOpen } = useModalsControl();

  return (
    <PopupBox>
      {ownComment || ownPost ? (
        <>
          <PopupList onClick={handleEditOpen}>수정</PopupList>
          <PopupList
            onClick={
              ownComment
                ? handleCommentDelete
                : () => {
                    handleModalOpen({ modalName: 'isPostDeleteModal' });
                    setIsMorePopup && setIsMorePopup(false);
                  }
            }
          >
            삭제
          </PopupList>
        </>
      ) : (
        <PopupList
          onClick={() => {
            setContentType(contentType);
            setReportedContent(reportedContent);
            setCurrentReportData(() => {
              return {
                postId: postId,
                commentId: commentId,
                replyCommentId: replyId,
              };
            });
            setIsMorePopup && setIsMorePopup(false);
            handleModalOpen({ modalName: 'isPostOrCommentReportModal' });
          }}
        >
          신고하기
        </PopupList>
      )}
    </PopupBox>
  );
}
