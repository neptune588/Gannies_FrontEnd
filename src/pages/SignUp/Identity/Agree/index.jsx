import React, { useEffect, useState } from 'react';

import Modal from '@/pages/SignUp/Identity/Agree/Modal';

import {
  Wrapper,
  SectionWrapper,
  Info,
  AgreeWrapper,
  ShowButton,
  CheckBox,
} from '@/pages/SignUp/Identity/Agree/style';
import uuid from 'react-uuid';

function Agree({ allow, handleAllow }) {
  const checkListCount = 2;
  const [openModalList, setOpenModalList] = useState(
    Array(checkListCount).fill(false)
  );
  const [checkList, setCheckList] = useState(Array(checkListCount).fill(false));

  const openModal = (index) => {
    setOpenModalList((prev) => {
      const newOpenModalList = [...prev];
      newOpenModalList[index] = !newOpenModalList[index];
      return newOpenModalList;
    });
  };

  useEffect(() => {
    const allChecked = checkList.every((item) => item === true);
    handleAllow(3, allChecked);
  }, [checkList]);

  const handleCheck = (index) => {
    setCheckList((prev) => {
      const newCheckList = [...prev];
      newCheckList[index] = !newCheckList[index];
      return newCheckList;
    });
  };

  const handleCheckTrue = (index) => {
    setCheckList((prev) => {
      const newCheckList = [...prev];
      newCheckList[index] = true;
      const allChecked = newCheckList.every((item) => item === true);
      handleAllow(3, allChecked);
      return newCheckList;
    });
  };

  const handleAllCheck = () => {
    const newCheckState = !checkList.every((item) => item === true);
    setCheckList(Array(checkListCount).fill(newCheckState));
    handleAllow(3, newCheckState);
  };

  return (
    <>
      {allow[0] && allow[1] && allow[2] && (
        <Wrapper>
          <SectionWrapper>
            <Info>회원약관</Info>
            <AgreeWrapper>
              <CheckBox
                type='checkbox'
                checked={checkList.every((item) => item === true)}
                onChange={handleAllCheck}
              />
              <p>전체약관동의</p>
            </AgreeWrapper>
            {Array.from({ length: checkListCount }).map((_, index) => (
              <AgreeWrapper key={uuid()}>
                <CheckBox
                  type='checkbox'
                  checked={checkList[index]}
                  onChange={() => handleCheck(index)}
                />
                <span>[필수]</span>
                <p>약관동의</p>
                <ShowButton onClick={() => openModal(index)}>
                  약관보기
                </ShowButton>
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
      )}
    </>
  );
}

export default Agree;
