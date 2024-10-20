import ModalContainer from '@/components/ModalContainer';
import ModalCloseArea from '@/components/ModalCloseArea';

import close from '@/assets/icons/etc/close.svg';

import {
  ModalWrapper,
  ModalTitle,
  DataAreaTop,
  DataBox,
  TopAreaLastDataBox,
  ModalCloseButton,
} from '@/pages/Admin/Modals/ReportedReviewModal/style';
import {
  DataType,
  LinkBox,
} from '@/pages/Admin/Modals/PostOrCommentDetailModal/style';

export default function PostOrCommentDetailModal({
  currentActiveCategory,
  detailModalInfo,
  handleModalClose,
}) {
  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalCloseButton
          onClick={handleModalClose}
          src={close}
          alt='modal-close-button'
        />
        <ModalTitle>
          {currentActiveCategory === '게시글' ? '게시글 상세' : '댓글 상세'}
        </ModalTitle>
        <DataAreaTop $activeCategory={currentActiveCategory}>
          <DataBox>
            <p>작성자</p>
            <div>{detailModalInfo.creator}</div>
          </DataBox>
          <DataBox>
            <p>작성일자</p>
            <div>{detailModalInfo.createDate}</div>
          </DataBox>
          <DataBox>
            <p>카테고리</p>
            <div>{detailModalInfo.boardType}</div>
          </DataBox>
          <DataBox>
            <p>
              {currentActiveCategory === '게시글' ? '게시물 ID' : '댓글 ID'}
            </p>
            <div>{detailModalInfo.itemId}</div>
          </DataBox>
          <TopAreaLastDataBox $activeCategory={currentActiveCategory}>
            <p>
              {currentActiveCategory === '게시글' ? '게시글 제목' : '댓글 본문'}
            </p>
            <div>{detailModalInfo.titleOrContent}</div>
          </TopAreaLastDataBox>
        </DataAreaTop>
        {/* 관리자 페이지 화면과 게시글을 함께 보는것이 맞는듯 하여 새로운 링크로 띄움 */}
        <DataType>게시글 링크</DataType>
        <LinkBox>
          <a
            href={detailModalInfo.navLink}
            target='_blank'
            rel='noopener noreferrer'
          >
            {detailModalInfo.navLink}
          </a>
        </LinkBox>
      </ModalWrapper>
      <ModalCloseArea handleModalClose={handleModalClose} />
    </ModalContainer>
  );
}
