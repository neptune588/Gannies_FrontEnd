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

export default function ReportedReviewModal({ activeCategory }) {
  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalTitle>
          {activeCategory === '게시글' ? '신고된 게시글' : '신고된 댓글'}
        </ModalTitle>
        <ModalCloseButton src={cross} alt={'modal-close-button'} />
        <DataAreaTop $activeCategory={activeCategory}>
          <DataBox>
            <p>작성자</p>
            <div>나는야 작성자</div>
          </DataBox>
          <DataBox>
            <p>작성일자</p>
            <div>2024-08-01</div>
          </DataBox>
          <DataBox>
            <p>카테고리</p>
            <div>이론정보</div>
          </DataBox>
          <DataBox>
            <p>번호</p>
            <div>1122</div>
          </DataBox>
          <TopAreaLastDataBox $activeCategory={activeCategory}>
            <p>{activeCategory === '게시글' ? '게시글 제목' : '댓글 본문'}</p>
            <div>
              {activeCategory === '게시글'
                ? '상대방을 열받게 하는 24가지 방법'
                : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi asperiores velit qui blanditiis quam aliquam quod placeat numquam sunt? Magni perferendis exercitationem tempora ratione quasi dignissimos perspiciatis facilis. Atque, a?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi asperiores velit qui blanditiis quam aliquam quod placeat numquam sunt? Magni perferendis exercitationem tempora ratione quasi dignissimos perspiciatis facilis. Atque, a?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi asperiores velit qui blanditiis quam aliquam quod placeat numquam sunt? Magni perferendis exercitationem tempora ratione quasi dignissimos perspiciatis facilis. Atque, a?'}
            </div>
          </TopAreaLastDataBox>
        </DataAreaTop>
        <DataAreaBottom>
          <DataBox>
            <p>신고자</p>
            <div>블랙컨슈머</div>
          </DataBox>
          <DataBox>
            <p>신고날짜</p>
            <div>2024-08-24</div>
          </DataBox>
          <BottomAreaLastDataBox>
            <p>신고사유</p>
            <div>재밌어서</div>
          </BottomAreaLastDataBox>
        </DataAreaBottom>
      </ModalWrapper>
      <ModalCloseArea />
    </ModalContainer>
  );
}
