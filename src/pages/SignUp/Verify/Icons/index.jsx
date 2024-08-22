import {
  Arrow,
  FontWrapper,
  Icon,
  Wrapper,
  IconsWrapper,
  Font,
  FontInactive
} from '@/pages/SignUp/Verify/Icons/style';
import info from '@/assets/icons/etc/info_input_inactive.svg';
import department from '@/assets/icons/etc/department_verification_inactive.svg';
import verify from '@/assets/icons/etc/verification_active.svg';
import arrow from '@/assets/icons/arrows/chevron_right.svg';

function Icons() {
  return (
    <Wrapper>
      <IconsWrapper>
        <Icon src={verify} alt="verify" />
        <Arrow src={arrow} alt="arrow" />
        <Icon src={info} alt="info" />
        <Arrow src={arrow} alt="arrow" />
        <Icon src={department} alt="department"/>     
			</IconsWrapper>
      <FontWrapper>
        <Font>본인인증</Font>
        <FontInactive>정보입력</FontInactive>
        <FontInactive>학과인증</FontInactive>
      </FontWrapper>
    </Wrapper>
  );
}

export default Icons;