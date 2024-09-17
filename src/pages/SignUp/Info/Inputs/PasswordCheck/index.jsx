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
import { useInputBorder } from '@/hooks/useInputBorder';
import { useOutletContext } from 'react-router-dom';

function PasswordCheck({ allow, handleAllow }) {
  const [passwordCheck, setPasswordCheck] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const instruction = [
    '비밀번호가 일치합니다',
    '필수 정보입니다',
    '비밀번호가 일치하지 않습니다',
  ];
  const [instructionIndex, setInstructionIndex] = useState(undefined);

  const { isFocused, handleIsFocused } = useInputBorder(undefined);
  const { dataToSend } = useOutletContext();
  const password = dataToSend.password;

  useEffect(() => {
    handleValidate();
  }, [password]);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordCheck = (e) => {
    const passwordCheck = e.target.value.slice(0, 16);
    setPasswordCheck(passwordCheck);
  };

  const handleInstruction = () => {
    if (!passwordCheck) {
      setInstructionIndex(1);
    } else {
      setInstructionIndex(2);
    }
  };

  const handleValidate = () => {
    handleAllow(3, !!passwordCheck && password === passwordCheck);
  };

  return (
    <InputSection $margin='37px' title='비밀번호 확인*'>
      <InputWrapper
        $isFocused={isFocused}
        $isValid={instructionIndex === undefined || allow[3]}
      >
        <InputBox
          type={showPassword ? 'text' : 'password'}
          placeholder='확인을 위해 비밀번호를 입력해주세요'
          value={passwordCheck}
          onChange={handlePasswordCheck}
          onFocus={() => handleIsFocused(true)}
          onBlur={() => {
            handleIsFocused(false);
            handleInstruction();
            handleValidate();
          }}
        />
        {showPassword ? (
          <EyeIcon onClick={handleShowPassword} />
        ) : (
          <EyeSlashIcon onClick={handleShowPassword} />
        )}
      </InputWrapper>
      {allow[3] && passwordCheck ? (
        <Positive text={instruction[0]} />
      ) : instructionIndex !== 0 ? (
        <Negative text={instruction[instructionIndex]} />
      ) : null}
    </InputSection>
  );
}

export default PasswordCheck;
