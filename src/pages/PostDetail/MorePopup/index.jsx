import { PopupBox, PopupList } from '@/pages/PostDetail/MorePopup/style';

export default function MorePopup({
  ownComment,
  handleEditButtonOpen,
  handleCommentDelete,
}) {
  return (
    <PopupBox>
      {ownComment ? (
        <>
          <PopupList onClick={handleEditButtonOpen}>수정</PopupList>
          <PopupList onClick={handleCommentDelete}>삭제</PopupList>
        </>
      ) : (
        <PopupList>신고하기</PopupList>
      )}
    </PopupBox>
  );
}
