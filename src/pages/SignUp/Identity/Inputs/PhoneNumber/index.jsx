import { useState } from 'react';
import InputSection from '@/pages/SignUp/components/InputSection';
import chevronDown from '@/assets/icons/arrows/chevron_down.svg';

import {
  InputBox,
  InfoWrapper,
  // ActiveButton,
  // DisabledButton,
  InactiveButton,
  ActiveButton,
  ImageWrapper,
  DisabledButton,
  InputWrapper,
} from '@/pages/SignUp/Identity/Inputs/PhoneNumber/style';
import uuid from 'react-uuid';
import { useOutletContext } from 'react-router-dom';
import { useInputBorder } from '@/hooks/useInputBorder';
import Negative from '@/components/Instruction/Negative';
// import axios from 'axios';

function PhoneNumber({ allow, handleAllow }) {
  const numberKinds = ['010', '011', '012', '016', '017', '018', '019'];
  const [prefix, setPrefix] = useState('010');
  const [suffix, setSuffix] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const { handleDataToSend } = useOutletContext();
  const validate = (phoneNumber) => phoneNumber.length >= 10;
  const instruction = ['필수 정보입니다', '정확한 휴대폰 번호를 입력해주세요'];
  const [instructionIndex, setInstructionIndex] = useState(1);

  const {
    isFocused,
    isValid,
    handleIsFocused,
    handleIsValid,
    handleInputBlur,
  } = useInputBorder(undefined, validate);

  const handlePrefix = (e) => {
    const prefix = e.target.value;
    setPrefix(prefix);
    setPhoneNumber(phoneNumber);
    handleDataToSend('phoneNumber', phoneNumber);
  };

  const handleSuffix = (e) => {
    const suffix = e.target.value.replace(/\D/g, '').slice(0, 8);
    setSuffix(suffix);
    const phoneNumber = `${prefix}${suffix}`;
    setPhoneNumber(phoneNumber);
    handleDataToSend('phoneNumber', phoneNumber);
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

  const handleInstruction = () => {
    if (!suffix) {
      setInstructionIndex(0);
    } else {
      setInstructionIndex(1);
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
        <InputWrapper $isFocused={isFocused} $isValid={isValid}>
          <InputBox
            type='text'
            placeholder='숫자만 입력해주세요'
            value={suffix}
            onChange={handleSuffix}
            disabled={allow[2]}
            onFocus={() => handleIsFocused(true)}
            onBlur={() => {
              handleIsFocused(false);
              handleInputBlur(phoneNumber);
              handleInstruction();
              if (!phoneNumber) {
                handleIsValid(false);
              }
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
      {isValid === false && <Negative text={instruction[instructionIndex]} />}
    </InputSection>
  );
}

export default PhoneNumber;
