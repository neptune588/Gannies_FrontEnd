import warn from '@/assets/images/warn_highlight.png';
import { ContentBox, TitleBox, ToastBox } from '@/components/Toast/style';

function IsTempPassword({ handleToastState }) {
  const closeToast = () => {
    handleToastState('isTempPassword', false);
  };
  return (
    <ToastBox>
      <TitleBox>
        <img src={warn} alt={warn} />
        <h4>비밀번호 변경 안내</h4>
      </TitleBox>
      <ContentBox>
        <p>
          임시로 발급된 비밀번호로 로그인하셨습니다.
          <br />
          마이 페이지로 이동하여 비밀번호를 변경해주세요. <br />
        </p>
      </ContentBox>
      <button onClick={closeToast}>닫기</button>
    </ToastBox>
  );
}

export default IsTempPassword;
