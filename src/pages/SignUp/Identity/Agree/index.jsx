import Modal from '@/pages/SignUp/Identity/Agree/Modal';
import {
  Wrapper,
  SectionWrapper,
  Info,
  AgreeWrapper,
  ShowButton
} from '@/pages/SignUp/Identity/Agree/style';

import { CheckBox } from '@/pages/SignUp/Identity/Agree/style';
import { useState } from 'react';

function Agree() {

  const checkListCount = 2;
  const [openModalList, setOpenModalList] = useState(Array(checkListCount).fill(false));
  const [allCheck, setAllCheck] = useState(false);
  const [checkList, setCheckList] = useState(Array(checkListCount).fill(false));

  const openModal = (index) => {
    setOpenModalList(prev => {
      const newOpenModalList = [...prev];
      newOpenModalList[index] = !openModalList[index];
      return newOpenModalList;
    });
  };

  const handleCheck = (index) => {
    setCheckList(prev => {
      const newCheckList = [...prev];
      newCheckList[index] = !newCheckList[index];
      newCheckList.every(item => item === true) ? setAllCheck(true) : setAllCheck(false);
      return newCheckList;
    });

  };
  
  const handleAllCheck = () => {
    const bool = allCheck ? false : true;
    setCheckList(Array(checkListCount).fill(bool))
    setAllCheck(!allCheck);
  };
  
  return (
    <Wrapper>
      <SectionWrapper>
        <Info>회원약관</Info>
        <AgreeWrapper >
          <CheckBox type="checkbox" checked={allCheck} onChange={handleAllCheck}/>
          <p>전체약관동의</p>
        </AgreeWrapper>
        {
          Array.from({ length: checkListCount }).map((_, index) => (
            <AgreeWrapper key={index}>
              <CheckBox type="checkbox" checked={checkList[index]} onChange={() => handleCheck(index)}/>
              <span>[필수]</span>
              <p>약관동의</p>
              <ShowButton onClick={() => openModal(index)}>약관보기</ShowButton>
              {
                openModalList[index] && <Modal index={index} openModal={openModal} handleCheck={handleCheck} />
              }
            </AgreeWrapper>
          ))
        }      
      </SectionWrapper>
    </Wrapper>
  );
}

export default Agree;