import warn from '@/assets/images/warn_highlight.png';
import { ContentBox, TitleBox, ToastBox } from '@/components/Toast/style';

function IsApproval({ handleToastState }) {
  const closeToast = () => {
    handleToastState('isApproval', false);
  };
  return (
    <ToastBox>
      <TitleBox>
        <img src={warn} alt={warn} />
        <h4>회원가입 승인 중</h4>
      </TitleBox>
      <ContentBox>
        <p>
          현재 회원님께서 신청하신 회원 가입이 진행 중입니다.
          <br />
          승인 절차를 거치는 대로 회원님께 알려드리겠습니다. <br />
          자세한 사항은 example@example.com으로 문의해주세요.
        </p>
      </ContentBox>
      <button onClick={closeToast}>닫기</button>
    </ToastBox>
  );
}

export default IsApproval;
