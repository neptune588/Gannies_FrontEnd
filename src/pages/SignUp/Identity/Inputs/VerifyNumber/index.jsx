import {
  InputBox,
  InputWrapper,
  InfoWrapper,
  Completed,
  // ActiveButton,
  InactiveButton,
  // DisabledButton
} from '@/pages/SignUp/Identity/Inputs/VerifyNumber/style';

import Clock from '@/components/Icons/Clock';
import InputSection from '@/pages/SignUp/components/InputSection';

function VerifyNumber() {
  return (
    <InputSection $margin="37px" title="*이름">
      <InfoWrapper>
          <InputWrapper>
          <InputBox type="text" placeholder='인증번호를 입력해주세요' />  
            <Clock time={0} />
          </InputWrapper>
          <InactiveButton>인증확인</InactiveButton>
          {/* <ActiveButton>인증확인</ActiveButton>
          <DisabledButton>인증확인</DisabledButton> */}
      </InfoWrapper>
      <Completed>인증이 완료되었습니다.</Completed>
    </InputSection>
  );
}

export default VerifyNumber;