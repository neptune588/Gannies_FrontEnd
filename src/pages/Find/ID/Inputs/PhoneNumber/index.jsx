import { useState } from 'react';
import uuid from 'react-uuid';
// import axios from 'axios';

import InputSection from '@/pages/SignUp/components/InputSection';
import chevronDown from '@/assets/icons/arrows/chevron_down.svg';

import {
  InputBox,
  InfoWrapper,
  InactiveButton,
  ActiveButton,
  ImageWrapper,
  DisabledButton,
  InputWrapper,
} from '@/pages/SignUp/Identity/Inputs/PhoneNumber/style';
import { useInputBorder } from '@/hooks/useInputBorder';

function PhoneNumber({ phoneNumber, setPhoneNumber, allow, handleAllow }) {
  const numberKinds = ['010', '011', '012', '016', '017', '018', '019'];
  const [prefix, setPrefix] = useState('010');
  const [suffix, setSuffix] = useState('');
  const { isFocused, handleIsFocused } = useInputBorder(undefined);

  const handlePrefix = (e) => {
    const prefix = e.target.value;
    setPrefix(prefix);
    setPhoneNumber(`${prefix}${suffix}`);
  };

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
        <select disabled={allow[2]} value={prefix} onChange={handlePrefix}>
          {numberKinds.map((number) => {
            return (
              <option value={number} key={uuid()}>
                {number}
              </option>
            );
          })}
        </select>
        <ImageWrapper>
          <img src={chevronDown} alt='chevronDown' />
        </ImageWrapper>
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
