import { PopupBox, PopupList } from '@/pages/PostDetail/MorePopup/style';

export default function MorePopup({
  ownComment,
  handlePutClick = null,
  handleDeleteClick = null,
  handleReportClick = null,
}) {
  return (
    <PopupBox>
      {ownComment ? (
        <>
          <PopupList>수정</PopupList>
          <PopupList>삭제</PopupList>
        </>
      ) : (
        <PopupList>신고하기</PopupList>
      )}
    </PopupBox>
  );
}
