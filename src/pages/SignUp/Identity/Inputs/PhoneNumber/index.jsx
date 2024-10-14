import { useEffect, useState } from 'react';
import InputSection from '@/pages/SignUp/components/InputSection';

import {
  InputBox,
  InfoWrapper,
  // ActiveButton,
  // DisabledButton,
  InactiveButton,
  ActiveButton,
  DisabledButton,
  InputWrapper,
} from '@/pages/SignUp/Identity/Inputs/PhoneNumber/style';
import { useOutletContext } from 'react-router-dom';
import { useInputBorder } from '@/hooks/useInputBorder';
import Negative from '@/components/Instruction/Negative';
import Dropdown from '@/pages/SignUp/components/DropDown';
import { sendPhoneNumber } from '@/api/authApi';
// import axios from 'axios';

function PhoneNumber({ allow, handleAllow }) {
  const [prefix, setPrefix] = useState('010');
  const [suffix, setSuffix] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const { handleDataToSend } = useOutletContext();
  const validate = (phoneNumber) => phoneNumber.length >= 10;
  const instruction = ['필수 정보입니다', '정확한 휴대폰 번호를 입력해주세요'];
  const [instructionIndex, setInstructionIndex] = useState(1);
  const prefixList = ['010', '011', '012', '016', '017', '018', '019'];

  const {
    isFocused,
    isValid,
    handleIsFocused,
    handleIsValid,
    handleInputBlur,
  } = useInputBorder(undefined, validate);

  useEffect(() => {
    const phoneNumber = `${prefix}${suffix}`;
    setPhoneNumber(phoneNumber);
    handleDataToSend('phoneNumber', phoneNumber);
  }, [prefix]);

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
      await sendPhoneNumber({ phoneNumber: phoneNumber });
    } catch (error) {
      alert('휴대폰 인증번호 발급 에러');
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
        <Dropdown
          optionList={prefixList}
          selectedOption={prefix}
          setSelectedOption={setPrefix}
          disabled={allow[2]}
        />
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
