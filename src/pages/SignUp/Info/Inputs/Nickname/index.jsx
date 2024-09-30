import Positive from '@/components/Instruction/Positive';
import Instruction from '@/components/Instruction';
import InputSection from '@/pages/SignUp/components/InputSection';
import DefaultInput from '@/pages/SignUp/components/DefaultInput';
import Negative from '@/components/Instruction/Negative';
import { useEffect, useState, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useInputBorder } from '@/hooks/useInputBorder';
import { checkNicknameDuplicate } from '@/api/authApi';

function Nickname({ allow, handleAllow }) {
  const [nickname, setNickname] = useState('');
  const { handleDataToSend } = useOutletContext();
  const regex = /^[a-zA-Z가-힣]{2,8}$/;
  const validate = (nickname) => nickname.length >= 2 && regex.test(nickname);
  const instruction = [
    '사용 가능한 닉네임입니다',
    '필수 정보입니다',
    '유효하지 않은 닉네임 형식입니다',
    '중복된 닉네임입니다',
  ];
  const [instructionIndex, setInstructionIndex] = useState(2);
  const {
    isFocused,
    isValid,
    handleIsValid,
    handleIsFocused,
    handleInputBlur,
  } = useInputBorder(undefined, validate);
  const [checkDuplicate, setCheckDuplicate] = useState(false);
  const prevNicknameRef = useRef(nickname);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isValid && !checkDuplicate) {
          const response = await checkNicknameDuplicate({ nickname: nickname });
          if (response.status === 201) {
            setCheckDuplicate(true);
            if (!response.data.available) {
              setInstructionIndex(3);
              handleAllow(0, false);
            } else {
              handleAllow(0, true);
            }
          }
        }
      } catch (error) {
        console.error('Error checking email duplicate:', error);
      }
    };
    if (!isValid) handleAllow(0, false);
    fetchData();
  }, [isValid, checkDuplicate]);

  const handleNickname = (e) => {
    const newNickname = e.target.value;
    setNickname(newNickname);
    handleDataToSend('nickname', newNickname);
  };

  const handleInstruction = () => {
    if (!nickname) {
      setInstructionIndex(1);
    } else {
      setInstructionIndex(2);
    }
  };

  return (
    <InputSection $margin='10px' title='닉네임*'>
      <DefaultInput
        placeholder='닉네임을 입력해주세요'
        onChange={handleNickname}
        value={nickname}
        $isFocused={isFocused}
        $isValid={allow[0] || isValid === undefined}
        onFocus={() => handleIsFocused(true)}
        onBlur={() => {
          handleIsFocused(false);
          handleInputBlur(nickname);
          if (nickname !== prevNicknameRef.current) {
            handleInstruction();
            setCheckDuplicate(false);
            prevNicknameRef.current = nickname;
          }
          if (!nickname) {
            handleInstruction();
            handleIsValid(false);
          }
        }}
      />
      {allow[0] ? (
        <Positive text={instruction[0]} />
      ) : (
        <>
          <Instruction text='*한글 또는 영문 2-8자' />
          <Instruction text='*숫자 및 특수문자 불가' />
          {isValid !== undefined && (
            <Negative text={instruction[instructionIndex]} />
          )}
        </>
      )}
    </InputSection>
  );
}

export default Nickname;
