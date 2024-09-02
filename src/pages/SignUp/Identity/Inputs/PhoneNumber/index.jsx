import uuid from 'react-uuid';

import {
  InputBox,
  InputWrapper,
  InfoWrapper,
  Select,
  Option,
  // ActiveButton,
  // DisabledButton,
  InactiveButton,
} from '@/pages/SignUp/Identity/Inputs/PhoneNumber/style';

import InputSection from '@/pages/SignUp/components/InputSection';

function PhoneNumber() {
  const numberKinds = ['010', '011', '012', '016', '017', '018', '019'];

  return (
    <InputSection $margin='37px' title='휴대폰 번호*'>
      <InfoWrapper>
        <Select>
          {numberKinds.map((number, e) => {
            return (
              <Option value={number} key={uuid()}>
                {number}
              </Option>
            );
          })}
        </Select>
        <InputWrapper>
          <InputBox type='text' placeholder='-없이 입력해주세요' />
        </InputWrapper>
        <InactiveButton>인증번호 발송</InactiveButton>
        {/* <DisabledButton>인증번호 발송</DisabledButton> */}
        {/* <ActiveButton>인증번호 발송</ActiveButton> */}
      </InfoWrapper>
    </InputSection>
  );
}

export default PhoneNumber;
