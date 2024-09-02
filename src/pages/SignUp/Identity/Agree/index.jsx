import React, { useEffect, useState } from 'react';

import Modal from '@/pages/SignUp/Identity/Agree/Modal';

import {
  Wrapper,
  SectionWrapper,
  Info,
  AgreeWrapper,
  ShowButton,
  CheckBox
} from '@/pages/SignUp/Identity/Agree/style';

function Agree({ setAllow }) {
  const checkListCount = 2;
  const [openModalList, setOpenModalList] = useState(Array(checkListCount).fill(false));
  const [checkList, setCheckList] = useState(Array(checkListCount).fill(false));

  const openModal = (index) => {
    setOpenModalList(prev => {
      const newOpenModalList = [...prev];
      newOpenModalList[index] = !newOpenModalList[index];
      return newOpenModalList;
    });
  };

  useEffect(() => {
    const allChecked = checkList.every(item => item === true);
    setAllow(prevAllow => {
      const newAllow = [...prevAllow];
      newAllow[3] = allChecked;
      return newAllow;
    });
  }, [checkList]);

  const handleCheck = (index) => {
    setCheckList(prev => {
      const newCheckList = [...prev];
      newCheckList[index] = !newCheckList[index];
      return newCheckList;
    });
  };
  
  const handleCheckTrue = (index) => {
    setCheckList(prev => {
      const newCheckList = [...prev];
      newCheckList[index] = true;
      const allChecked = newCheckList.every(item => item === true);
      setAllow(prevAllow => {
        const newAllow = [...prevAllow];
        newAllow[3] = allChecked;
        return newAllow;
      });
      return newCheckList;
    });
  };
  
  const handleAllCheck = () => {
    const newCheckState = !checkList.every(item => item === true);
    setCheckList(Array(checkListCount).fill(newCheckState));
    setAllow(prevAllow => {
      const newAllow = [...prevAllow];
      newAllow[3] = newCheckState;
      return newAllow;
    });
  };

  return (
    <Wrapper>
      <SectionWrapper>
        <Info>회원약관</Info>
        <AgreeWrapper>
          <CheckBox
            type="checkbox"
            checked={checkList.every(item => item === true)}
            onChange={handleAllCheck}
          />
          <p>전체약관동의</p>
        </AgreeWrapper>
        {Array.from({ length: checkListCount }).map((_, index) => (
          <AgreeWrapper key={index}>
            <CheckBox
              type="checkbox"
              checked={checkList[index]}
              onChange={() => handleCheck(index)}
            />
            <span>[필수]</span>
            <p>약관동의</p>
            <ShowButton onClick={() => openModal(index)}>약관보기</ShowButton>
            {openModalList[index] && (
              <Modal
                index={index}
                openModal={openModal}
                handleCheckTrue={handleCheckTrue}
              />
            )}
          </AgreeWrapper>
        ))}
      </SectionWrapper>
    </Wrapper>
  );
}

export default Agree;