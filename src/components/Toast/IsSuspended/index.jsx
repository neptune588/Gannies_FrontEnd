import warn from '@/assets/images/warn_highlight.png';
import { ContentBox, TitleBox, ToastBox } from '@/components/Toast/style';
import { formatDateToSuspend } from '@/utils/dateFormatting';

function IsSuspended({ duration, reason, endDate, handleToastState }) {
  const closeToast = () => {
    handleToastState('isSuspended', false);
  };
  return (
    <ToastBox>
      <TitleBox>
        <img src={warn} alt={warn} />
        <h4>계정 정지 안내</h4>
      </TitleBox>
      <ContentBox>
        <p>
          현재 귀하의 계정은 {duration} 동안 정지되었습니다. <br />
          정지 사유: {reason} <br />
          정지 해제 예정일: {formatDateToSuspend(endDate)}
          <br />
          자세한 사항은 example@example.com으로 문의해주세요.
        </p>
      </ContentBox>
      <button onClick={closeToast}>닫기</button>
    </ToastBox>
  );
}

export default IsSuspended;
