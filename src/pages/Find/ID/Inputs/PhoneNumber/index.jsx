import { useEffect, useState } from 'react';
// import axios from 'axios';

import InputSection from '@/pages/SignUp/components/InputSection';

import {
  InputBox,
  InfoWrapper,
  InactiveButton,
  ActiveButton,
  // ImageWrapper,
  DisabledButton,
  InputWrapper,
} from '@/pages/SignUp/Identity/Inputs/PhoneNumber/style';
import { useInputBorder } from '@/hooks/useInputBorder';
import Dropdown from '@/pages/SignUp/components/DropDown';

function PhoneNumber({ phoneNumber, setPhoneNumber, allow, handleAllow }) {
  const [prefix, setPrefix] = useState('010');
  const [suffix, setSuffix] = useState('');
  const { isFocused, handleIsFocused } = useInputBorder(undefined);
  const prefixList = ['010', '011', '012', '016', '017', '018', '019'];

  useEffect(() => {
    const phoneNumber = `${prefix}${suffix}`;
    setPhoneNumber(phoneNumber);
  }, [prefix]);

  const handleSuffix = (e) => {
    const suffix = e.target.value.slice(0, 8);
    setSuffix(suffix);
    setPhoneNumber(`${prefix}${suffix}`);
    handleAllow(1, false);
  };

  const handleSendButton = async () => {
    try {
      handleAllow(1, true);
      // const response = await axios.post('/auth/phone', { phoneNumber });
    } catch (error) {
      alert('error');
    }
  };

  return (
    <InputSection $margin='37px' title='휴대폰 번호*'>
      <InfoWrapper>
        <Dropdown
          optionList={prefixList}
          selectedOption={prefix}
          setSelectedOption={setPrefix}
          disabled={allow[2]}
        />
        <InputWrapper $isFocused={isFocused}>
          <InputBox
            type='text'
            placeholder='-없이 입력해주세요'
            value={suffix}
            onChange={handleSuffix}
            disabled={allow[2]}
            onFocus={() => handleIsFocused(true)}
            onBlur={() => {
              handleIsFocused(false);
            }}
          />
        </InputWrapper>
        {!allow[0] || phoneNumber.length < 10 ? (
          <InactiveButton>인증번호 발송</InactiveButton>
        ) : allow[2] ? (
          <DisabledButton>인증번호 재발송</DisabledButton>
        ) : allow[1] ? (
          <ActiveButton onClick={handleSendButton}>
            인증번호 재발송
          </ActiveButton>
        ) : (
          <ActiveButton onClick={handleSendButton}>인증번호 발송</ActiveButton>
        )}
      </InfoWrapper>
    </InputSection>
  );
}

export default PhoneNumber;
