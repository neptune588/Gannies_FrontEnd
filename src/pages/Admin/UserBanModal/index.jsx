import ModalContainer from '@/components/ModalContainer';
import ModalCloseArea from '@/components/ModalCloseArea';

import cross from '@/assets/icons/etc/close.svg';

import {
  ModalWrapper,
  ModalTitle,
  InputBox,
  InputTitle,
  RadioSection,
  RadioBox,
  ModalCloseButton,
  ConfirmButton,
} from '@/pages/Admin/UserBanModal/style';

export default function UserBanModal() {
  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalCloseButton>
          <img src={cross} alt='modal-close-button' />
        </ModalCloseButton>
        <ModalTitle>정지사유입력</ModalTitle>
        <InputBox>
          <InputTitle>닉네임</InputTitle>
          <input placeholder='닉네임 입력' />
        </InputBox>
        <InputBox>
          <InputTitle>이메일</InputTitle>
          <input placeholder='이메일 입력' />
        </InputBox>
        <InputBox>
          <InputTitle>정지 사유</InputTitle>
          <textarea placeholder='사유 입력' maxLength={150} />
        </InputBox>
        <InputTitle>기간설정</InputTitle>
        <RadioSection>
          <RadioBox>
            <input
              id='one-week'
              type='radio'
              name='week-select'
              value='1주'
              onClick={(e) => {
                console.log(e.target.value);
              }}
            ></input>
            <label htmlFor='one-week'>1주</label>
          </RadioBox>
          <RadioBox>
            <input
              id='two-week'
              type='radio'
              name='week-select'
              value='2주'
              onClick={(e) => {
                console.log(e.target.value);
              }}
            ></input>
            <label htmlFor='two-week'>2주</label>
          </RadioBox>
          <RadioBox>
            <input
              id='three-week'
              type='radio'
              name='week-select'
              value='3주'
              onClick={(e) => {
                console.log(e.target.value);
              }}
            ></input>
            <label htmlFor='three-week'>3주</label>
          </RadioBox>
          <RadioBox>
            <input
              id='four-week'
              type='radio'
              name='week-select'
              value='4주'
              onClick={(e) => {
                console.log(e.target.value);
              }}
            ></input>
            <label htmlFor='four-week'>4주</label>
          </RadioBox>
        </RadioSection>
        <ConfirmButton>수정완료</ConfirmButton>
      </ModalWrapper>
      <ModalCloseArea></ModalCloseArea>
    </ModalContainer>
  );
}
