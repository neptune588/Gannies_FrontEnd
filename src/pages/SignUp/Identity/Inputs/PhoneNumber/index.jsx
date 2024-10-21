import { useEffect, useState } from 'react';
import InputSection from '@/pages/SignUp/components/InputSection';

import {
  InputBox,
  InfoWrapper,
  InactiveButton,
  ActiveButton,
  DisabledButton,
  InputWrapper,
} from '@/pages/SignUp/Identity/Inputs/PhoneNumber/style';
import { useOutletContext } from 'react-router-dom';
import Negative from '@/components/Instruction/Negative';
import Dropdown from '@/pages/SignUp/components/DropDown';
import { sendPhoneNumber } from '@/api/authApi';
import { useInputValid } from '@/hooks/useInputValid';
import { preventEnterKey } from '@/utils/PreventEnterKey';

function PhoneNumber({ allow, handleAllow }) {
  const [prefix, setPrefix] = useState('010');
  const [suffix, setSuffix] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [allowButton, setAllowButton] = useState(undefined);
  const { handleDataToSend } = useOutletContext();
  const regex = /^\d{7,8}$/;
  const validate = (phoneNumber) => regex.test(phoneNumber);
  const instruction = [
    '',
    '필수 정보입니다',
    '정확한 휴대폰 번호를 입력해주세요',
  ];
  const [instructionIndex, setInstructionIndex] = useState(undefined);
  const prefixList = ['010', '011', '012', '016', '017', '018', '019'];
  const { isFocused, setIsFocused, checkIsValid } = useInputValid(
    undefined,
    validate
  );

  useEffect(() => {
    const phoneNumber = `${prefix}${suffix}`;
    setPhoneNumber(phoneNumber);
    handleDataToSend('phoneNumber', phoneNumber);
  }, [prefix]);

  const handleSuffix = async (e) => {
    const suffix = e.target.value;
    setSuffix(suffix);
    const phoneNumber = `${prefix}${suffix}`;
    setPhoneNumber(phoneNumber);
    handleDataToSend('phoneNumber', phoneNumber);
    const allow = await checkIsValid(suffix);
    setInstructionIndex(allow);
    setAllowButton(allow === 0 ? true : false);
  };

  const handleSendButton = async () => {
    try {
      handleAllow(1, true);
      await sendPhoneNumber({ phoneNumber: phoneNumber });
    } catch (error) {
      alert('휴대폰 인증번호 발급 에러');
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
        <InputWrapper $isFocused={isFocused} $isValid={allowButton}>
          <InputBox
            type='text'
            placeholder='숫자만 입력해주세요'
            value={suffix}
            onChange={handleSuffix}
            disabled={allow[2]}
            onFocus={() => {
              setIsFocused(true);
              if (allowButton === undefined) {
                setAllowButton(false);
                setInstructionIndex(1);
              }
            }}
            onBlur={() => {
              setIsFocused(false);
              if (!allowButton && !suffix) {
                setAllowButton(undefined);
                setInstructionIndex(undefined);
              }
            }}
            onKeyDown={(e) => {
              preventEnterKey(e);
            }}
          />
        </InputWrapper>
        {!allow[0] || !allowButton ? (
          <InactiveButton>인증번호 발송</InactiveButton>
        ) : allow[2] ? (
          <DisabledButton>인증번호 재발송</DisabledButton>
        ) : (
          <ActiveButton onClick={handleSendButton}>
            {allow[1] ? '인증번호 재발송' : '인증번호 발송'}
          </ActiveButton>
        )}
      </InfoWrapper>
      {allowButton === false && (
        <Negative text={instruction[instructionIndex]} />
      )}
    </InputSection>
  );
}

export default PhoneNumber;
