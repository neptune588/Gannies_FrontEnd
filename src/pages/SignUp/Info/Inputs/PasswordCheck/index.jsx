import { useEffect, useState } from 'react';

import InputSection from '@/pages/SignUp/components/InputSection';
import Positive from '@/components/Instruction/Positive';

import {
  InputBox,
  InputWrapper,
  EyeIcon,
  EyeSlashIcon,
} from '@/pages/SignUp/Info/Inputs/Password/style';
import Negative from '@/components/Instruction/Negative';
import { useOutletContext } from 'react-router-dom';
import { useInputValid } from '@/hooks/useInputValid';
import { preventEnterKey } from '@/utils/PreventEnterKey';

function PasswordCheck({ allow, handleAllow }) {
  const [passwordCheck, setPasswordCheck] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const validate = (passwordCheck, password) => passwordCheck === password;

  const instruction = [
    '비밀번호가 일치합니다',
    '필수 정보입니다',
    '비밀번호가 일치하지 않습니다',
  ];
  const [instructionIndex, setInstructionIndex] = useState(undefined);
  const { isFocused, focusIfEmpty, blurIfEmpty, setIsFocused, checkIsValid } =
    useInputValid(undefined, validate);

  const { dataToSend } = useOutletContext();
  const password = dataToSend.password;

  const handlePassword = async () => {
    if (passwordCheck) {
      const allow = await checkIsValid(passwordCheck, password);
      setInstructionIndex(allow);

      handleAllow(3, allow === 0 ? true : false);
    }
  };

  useEffect(() => {
    handlePassword();
  }, [password]);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordCheck = async (e) => {
    const passwordCheck = e.target.value.slice(0, 16);
    setPasswordCheck(passwordCheck);

    const allow = await checkIsValid(passwordCheck, password);
    setInstructionIndex(allow);

    handleAllow(3, allow === 0 ? true : false);
  };

  return (
    <InputSection $margin='37px' title='비밀번호 확인*'>
      <InputWrapper $isFocused={isFocused} $isValid={allow[3]}>
        <InputBox
          type={showPassword ? 'text' : 'password'}
          placeholder='확인을 위해 비밀번호를 입력해주세요'
          value={passwordCheck}
          onChange={handlePasswordCheck}
          onFocus={() => {
            setIsFocused(true);
            if (allow[3] === undefined) {
              const instructionIndex = focusIfEmpty(3, handleAllow);
              setInstructionIndex(instructionIndex);
            }
          }}
          onBlur={() => {
            setIsFocused(false);
            if (!allow[3] && !passwordCheck) {
              const instructionIndex = blurIfEmpty(3, handleAllow);
              setInstructionIndex(instructionIndex);
            }
          }}
          onKeyDown={(e) => {
            preventEnterKey(e);
          }}
        />
        {showPassword ? (
          <EyeIcon onClick={handleShowPassword} />
        ) : (
          <EyeSlashIcon onClick={handleShowPassword} />
        )}
      </InputWrapper>
      {allow[3] ? (
        <Positive text={instruction[0]} />
      ) : (
        <Negative text={instruction[instructionIndex]} />
      )}
    </InputSection>
  );
}

export default PasswordCheck;
