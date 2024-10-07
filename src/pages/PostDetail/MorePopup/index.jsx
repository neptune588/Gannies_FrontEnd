import { PopupBox, PopupList } from '@/pages/PostDetail/MorePopup/style';

import { setIsPostDeleteModal } from '@/store/modalsControl';

import useModalsControl from '@/hooks/useModalsControl';

export default function MorePopup({
  ownComment,
  ownPost,
  handleEditButtonOpen,
  handleCommentDelete,
}) {
  const { handleModalOpen } = useModalsControl();

  return (
    <PopupBox>
      {ownComment || ownPost ? (
        <>
          <PopupList onClick={handleEditButtonOpen}>수정</PopupList>
          <PopupList
            onClick={
              ownComment
                ? handleCommentDelete
                : () => {
                    handleModalOpen({ modalDispatch: setIsPostDeleteModal });
                  }
            }
          >
            삭제
          </PopupList>
        </>
      ) : (
        <PopupList>신고하기</PopupList>
      )}
    </PopupBox>
  );
}
