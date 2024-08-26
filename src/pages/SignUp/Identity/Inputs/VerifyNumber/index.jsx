import {
  InputBox,
  InputWrapper,
  InfoWrapper,
  // ActiveButton,
  InactiveButton,
  // DisabledButton
} from '@/pages/SignUp/Identity/Inputs/VerifyNumber/style';

import Clock from '@/components/Icons/Clock';
import InputSection from '@/pages/SignUp/components/InputSection';
import Positive from '@/components/Instruction/Positive';

function VerifyNumber() {
  return (
    <InputSection $margin="37px" title="인증번호*">
      <InfoWrapper>
          <InputWrapper>
          <InputBox type="text" placeholder='인증번호를 입력해주세요' />  
            <Clock time={0} />
          </InputWrapper>
          <InactiveButton>인증확인</InactiveButton>
          {/* <ActiveButton>인증확인</ActiveButton>
          <DisabledButton>인증확인</DisabledButton> */}
      </InfoWrapper>
      <Positive text="인증이 완료되었습니다"></Positive>
    </InputSection>
  );
}

export default VerifyNumber;