import warn from '@/assets/images/warn_highlight.png';
import { ContentBox, TitleBox, ToastBox } from '@/components/Toast/style';

function Rejected({ reason, handleToastState }) {
  const closeToast = () => {
    handleToastState('rejected', false);
  };
  return (
    <ToastBox>
      <TitleBox>
        <img src={warn} alt={warn} />
        <h4>회원가입 승인이 거절되었습니다</h4>
      </TitleBox>
      <ContentBox>
        <p>
          다음과 같은 사유로 인해 정회원 승인이 거절되었습니다. <br />
          사유: {reason}
          <br />
          자세한 사항은 example@example.com으로 문의해주세요.
        </p>
      </ContentBox>
      <button onClick={closeToast}>닫기</button>
    </ToastBox>
  );
}

export default Rejected;
