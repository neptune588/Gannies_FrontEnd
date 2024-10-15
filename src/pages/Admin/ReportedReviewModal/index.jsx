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
} from '@/pages/Admin/ReportedReviewModal/style';

import useModalsControl from '@/hooks/useModalsControl';

import { setIsReportedCotentModal } from '@/store/modalsControl';

export default function ReportedReviewModal({
  activeCategory,
  reviewModalContents,
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
            handleModalClose({ modalDispatch: setIsReportedCotentModal });
          }}
        />
        <DataAreaTop $activeCategory={activeCategory}>
          <DataBox>
            <p>작성자</p>
            <div>{reviewModalContents.creator}</div>
          </DataBox>
          <DataBox>
            <p>작성일자</p>
            <div>{reviewModalContents.reportDate}</div>
          </DataBox>
          <DataBox>
            <p>카테고리</p>
            <div>{reviewModalContents.category}</div>
          </DataBox>
          <DataBox>
            <p>{activeCategory === '게시글' ? '게시물 ID' : '댓글 ID'}</p>
            <div>{reviewModalContents.contentId}</div>
          </DataBox>
          <TopAreaLastDataBox $activeCategory={activeCategory}>
            <p>{activeCategory === '게시글' ? '게시글 제목' : '댓글 본문'}</p>
            <div>{reviewModalContents.content}</div>
          </TopAreaLastDataBox>
        </DataAreaTop>
        <DataAreaBottom>
          <DataBox>
            <p>신고자</p>
            <div>{reviewModalContents.reporter}</div>
          </DataBox>
          <DataBox>
            <p>신고날짜</p>
            <div>{reviewModalContents.reportDate}</div>
          </DataBox>
          <BottomAreaLastDataBox>
            <p>신고사유</p>
            <div>
              {reviewModalContents.otherReportedReason
                ? reviewModalContents.otherReportedReason
                : reviewModalContents.reportReason}
            </div>
          </BottomAreaLastDataBox>
        </DataAreaBottom>
      </ModalWrapper>
      <ModalCloseArea
        handleModalClose={() => {
          handleModalClose({ modalDispatch: setIsReportedCotentModal });
        }}
      />
    </ModalContainer>
  );
}
