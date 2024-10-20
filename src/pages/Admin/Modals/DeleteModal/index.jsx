import ModalContainer from '@/components/ModalContainer';
import ModalCloseArea from '@/components/ModalCloseArea';

import close from '@/assets/icons/etc/close.svg';
import alert from '@/assets/icons/etc/warn.svg';

import {
  ModalWrapper,
  ContentsWrapper,
  ModalCloseButton,
  AlertImgBox,
  WarningMessage,
  InformationMessage,
  NoticeMessage,
  ConfirmButton,
} from '@/pages/Admin/Modals/DeleteModal/style';

import { deletePosts, deleteCommentsOrReplyComments } from '@/api/adminApi';

import { confirmAlert } from '@/utils/sweetAlert';

export default function DeleteModal({
  stateReset,
  selectedIds,
  currentActiveCategory,
  updateChangedQueries,
  deleteItemLength,
  handleModalClose,
}) {
  const handleItemDelete = async () => {
    console.log(selectedIds);
    try {
      if (currentActiveCategory === '게시글') {
        await deletePosts({ data: { postIds: selectedIds } });
      } else {
        await deleteCommentsOrReplyComments({ data: selectedIds });
      }

      stateReset();
      updateChangedQueries();
      confirmAlert(
        `해당 ${currentActiveCategory === '게시글' ? '게시글' : '댓글'}들이 성공적으로 삭제 되었습니다!`
      );
      handleModalClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ModalContainer>
      <ModalWrapper>
        <ContentsWrapper>
          <ModalCloseButton onClick={handleModalClose}>
            <img src={close} alt='modal-close-button' />
          </ModalCloseButton>
          <AlertImgBox>
            <img src={alert} alt='warn' />
          </AlertImgBox>
          <WarningMessage>정말 삭제를 하시겠습니까?</WarningMessage>
          <InformationMessage>
            총 {deleteItemLength}개의{' '}
            {currentActiveCategory === '게시글' ? '게시글' : '댓글'}이 삭제될
            예정입니다
          </InformationMessage>
          <NoticeMessage>
            삭제된 {currentActiveCategory === '게시글' ? '게시글' : '댓글'}은
            영구적으로 삭제되며, <br />
            복구는 불가능 합니다
          </NoticeMessage>
        </ContentsWrapper>
        <ConfirmButton type='button' onClick={handleItemDelete}>
          삭제하기
        </ConfirmButton>
      </ModalWrapper>
      <ModalCloseArea handleModalClose={handleModalClose} />
    </ModalContainer>
  );
}
