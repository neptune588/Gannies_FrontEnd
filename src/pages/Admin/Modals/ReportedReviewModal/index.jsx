import ModalContainer from '@/components/ModalContainer';
import ModalCloseArea from '@/components/ModalCloseArea';

import cross from '@/assets/icons/etc/close.svg';

import {
  ModalWrapper,
  ModalTitle,
  DataAreaTop,
  DataAreaBottom,
  DataBox,
  TopAreaLastDataBox,
  BottomAreaLastDataBox,
  ModalCloseButton,
} from '@/pages/Admin/Modals/ReportedReviewModal/style';

import useModalsControl from '@/hooks/useModalsControl';

export default function ReportedReviewModal({
  activeCategory,
  reviewModalProps,
}) {
  const { handleModalClose } = useModalsControl();

  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalTitle>
          {activeCategory === '게시글' ? '신고된 게시글' : '신고된 댓글'}
        </ModalTitle>
        <ModalCloseButton
          src={cross}
          alt={'modal-close-button'}
          onClick={() => {
            handleModalClose({ modalName: 'isReportedCotentModal' });
          }}
        />
        <DataAreaTop $activeCategory={activeCategory}>
          <DataBox>
            <p>작성자</p>
            <div>{reviewModalProps.creator}</div>
          </DataBox>
          <DataBox>
            <p>작성일자</p>
            <div>{reviewModalProps.reportDate}</div>
          </DataBox>
          <DataBox>
            <p>카테고리</p>
            <div>{reviewModalProps.category}</div>
          </DataBox>
          <DataBox>
            <p>{activeCategory === '게시글' ? '게시물 ID' : '댓글 ID'}</p>
            <div>{reviewModalProps.contentId}</div>
          </DataBox>
          <TopAreaLastDataBox $activeCategory={activeCategory}>
            <p>{activeCategory === '게시글' ? '게시글 제목' : '댓글 본문'}</p>
            <div>{reviewModalProps.content}</div>
          </TopAreaLastDataBox>
        </DataAreaTop>
        <DataAreaBottom>
          <DataBox>
            <p>신고자</p>
            <div>{reviewModalProps.reporter}</div>
          </DataBox>
          <DataBox>
            <p>신고날짜</p>
            <div>{reviewModalProps.reportDate}</div>
          </DataBox>
          <BottomAreaLastDataBox>
            <p>신고사유</p>
            <div>
              {reviewModalProps.otherReportedReason
                ? reviewModalProps.otherReportedReason
                : reviewModalProps.reportReason}
            </div>
          </BottomAreaLastDataBox>
        </DataAreaBottom>
      </ModalWrapper>
      <ModalCloseArea
        handleModalClose={() => {
          handleModalClose({ modalName: 'isReportedCotentModal' });
        }}
      />
    </ModalContainer>
  );
}
