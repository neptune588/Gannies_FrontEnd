import { changeUserNickname, getUserInfo } from '@/api/userApi';
import IsApproval from '@/components/Modal/IsApproval';
import IsWithdrawal from '@/components/Modal/IsWithdrawal';
import {
  Title,
  PersonalInfoWrapper,
  PersonalInfoBox,
  NicknameEditBox,
  EditSaveAndAccountDeleteBox,
} from '@/pages/MyPage/PersonalInfo/style';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function PersonalInfo() {
  const [nickname, setNickname] = useState('');
  const [info, setInfo] = useState({
    nickname: '',
    name: '',
    phoneNumber: '',
    email: '',
  });
  const [isEditable, setIsEditable] = useState(false);
  const modalState = useSelector((state) => state.modalState);
  const [openWithdrawalModal, setOpenWithdrawalModal] = useState(false);

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
  }, []);

  const handleNickname = (e) => {
    const nickname = e.target.value;
    setNickname(nickname);
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
      {modalState.isApproval && <IsApproval />}
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
              />
              <button onClick={handleModify}>
                {!isEditable ? '수정하기' : '취소하기'}
              </button>
            </div>
          </NicknameEditBox>
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
            <button onClick={handleSave}>저장하기</button>
            <button onClick={handleWithdrawal}>회원탈퇴</button>
          </EditSaveAndAccountDeleteBox>
        </form>
      </PersonalInfoWrapper>
    </>
  );
}
