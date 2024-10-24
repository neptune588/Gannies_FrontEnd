import { checkNicknameDuplicate } from '@/api/authApi';
import { changeUserNickname, getUserInfo } from '@/api/userApi';
import Instruction from '@/components/Instruction';
import Negative from '@/components/Instruction/Negative';
import Positive from '@/components/Instruction/Positive';
import IsWithdrawal from '@/components/Modal/IsWithdrawal';
import { useInputValid } from '@/hooks/useInputValid';
import {
  Title,
  PersonalInfoWrapper,
  PersonalInfoBox,
  NicknameEditBox,
  EditSaveAndAccountDeleteBox,
  InstructionBox,
  ActiveButton,
  InactiveButton,
} from '@/pages/MyPage/PersonalInfo/style';
import { useEffect, useRef, useState } from 'react';

export default function PersonalInfo() {
  const [nickname, setNickname] = useState('');
  const [info, setInfo] = useState({
    nickname: '',
    name: '',
    phoneNumber: '',
    email: '',
  });
  const [allow, setAllow] = useState(undefined);
  const regex = /^[a-zA-Z가-힣]{2,8}$/;
  const validate = (nickname) => regex.test(nickname);
  const instruction = [
    '사용 가능한 닉네임입니다',
    '필수 정보입니다',
    '유효하지 않은 닉네임 형식입니다',
    '중복된 닉네임입니다',
    '현재 닉네임과 동일합니다',
  ];
  const [instructionIndex, setInstructionIndex] = useState(undefined);
  const { checkIsValid } = useInputValid(undefined, validate);
  const [isEditable, setIsEditable] = useState(false);
  const [openWithdrawalModal, setOpenWithdrawalModal] = useState(false);
  const timeoutIdRef = useRef(null);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await getUserInfo();
        if (response.status === 200) {
          setInfo({
            nickname: response.data.nickname,
            name: response.data.username,
            phoneNumber: response.data.phoneNumber,
            email: response.data.email,
          });
          setNickname(response.data.nickname);
        }
      } catch (error) {
        alert('정보를 가져오는 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    };

    getInfo();

    return () => {
      clearTimeout(timeoutIdRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isEditable) {
      setAllow(undefined);
      setInstructionIndex(undefined);
    }
  }, [isEditable]);

  const handleNickname = async (e) => {
    const nickname = e.target.value;
    setNickname(nickname);
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    if (nickname === info.nickname) {
      timeoutIdRef.current = setTimeout(() => {
        setInstructionIndex(4);
        setAllow(false);
      }, 0);
      return;
    }

    const allow = await checkIsValid(
      nickname,
      'nickname',
      checkNicknameDuplicate
    );
    setInstructionIndex(allow);
    setAllow(allow === 0);
  };

  const handleModify = (e) => {
    e.preventDefault();
    if (isEditable) {
      setNickname(info.nickname);
    }
    setIsEditable(!isEditable);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await changeUserNickname({ newNickname: nickname });
      setInfo((prev) => ({
        ...prev,
        nickname: nickname,
      }));
      setIsEditable(!isEditable);
    } catch (error) {
      alert('닉네임 변경 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const handleWithdrawal = async (e) => {
    e.preventDefault();
    setOpenWithdrawalModal(true);
  };

  return (
    <>
      {openWithdrawalModal && (
        <IsWithdrawal setOpenModal={setOpenWithdrawalModal} />
      )}
      <Title>회원정보수정</Title>
      <PersonalInfoWrapper>
        <form>
          <NicknameEditBox>
            <p>닉네임</p>
            <div>
              <input
                placeholder='닉네임 입력'
                value={isEditable ? nickname : info.nickname}
                onChange={handleNickname}
                maxLength={10}
                disabled={!isEditable}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                  }
                }}
              />
              <button onClick={handleModify}>
                {!isEditable ? '수정하기' : '취소하기'}
              </button>
            </div>
          </NicknameEditBox>
          {isEditable && (
            <InstructionBox>
              <Instruction text='*한글 또는 영문 2-8자' />
              <Instruction text='*숫자 및 특수문자 불가' />
              {allow ? (
                <Positive text={instruction[instructionIndex]} />
              ) : (
                <Negative text={instruction[instructionIndex]} />
              )}
            </InstructionBox>
          )}
          <PersonalInfoBox>
            <p>이름</p>
            <p>{info.name}</p>
          </PersonalInfoBox>
          <PersonalInfoBox>
            <p>휴대폰번호</p>
            <p>{info.phoneNumber}</p>
          </PersonalInfoBox>
          <PersonalInfoBox>
            <p>이메일</p>
            <p>{info.email}</p>
          </PersonalInfoBox>
          <EditSaveAndAccountDeleteBox>
            {isEditable && allow ? (
              <ActiveButton onClick={handleSave}>저장하기</ActiveButton>
            ) : (
              <InactiveButton disabled>저장하기</InactiveButton>
            )}
            <button onClick={handleWithdrawal}>회원탈퇴</button>
          </EditSaveAndAccountDeleteBox>
        </form>
      </PersonalInfoWrapper>
    </>
  );
}
