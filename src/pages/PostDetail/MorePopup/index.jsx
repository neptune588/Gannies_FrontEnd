import { PopupBox, PopupList } from '@/pages/PostDetail/MorePopup/style';

export default function MorePopup({
  isLogin = true,
  handlePutClick = null,
  handleDeleteClick = null,
  handleReportClick = null,
}) {
  return (
    <PopupBox>
      {isLogin ? (
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
