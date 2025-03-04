import { useEffect, useRef, useState } from 'react';
import uuid from 'react-uuid';

import ModalContainer from '@/components/ModalContainer';
import { agreeList } from '@/pages/SignUp/Identity/Agree/Modal/data';
import inactive from '@/assets/icons/etc/check_circle_inactive.svg';
import active from '@/assets/icons/etc/check_circle_active.svg';

import {
  ActiveButton,
  Blur,
  Body,
  CheckIcon,
  CloseIcon,
  Footer,
  Header,
  InactiveButton,
  ModalBox,
} from '@/pages/SignUp/Identity/Agree/Modal/style';

function Modal({ index, openModal, handleCheckTrue }) {
  const bodyRef = useRef(null);

  const [scrollTop, setScrollTop] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollClientHeight, setScrollClientHeight] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const icon = isActive ? active : inactive;

  useEffect(() => {
    const handleScroll = () => {
      if (bodyRef.current) {
        setScrollTop(bodyRef.current.scrollTop);
        setScrollHeight(bodyRef.current.scrollHeight);
        setScrollClientHeight(bodyRef.current.clientHeight);
      }
    };

    const bodyElement = bodyRef.current;
    if (bodyElement) {
      bodyElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (bodyElement) {
        bodyElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (scrollTop && scrollTop + scrollClientHeight >= scrollHeight - 10) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [scrollTop]);

  const handleButton = () => {
    handleCheckTrue(index);
    openModal(index);
  };

  return (
    <ModalContainer>
      <ModalBox>
        <Header>
          <h3>개인정보 이용약관</h3>
          <CloseIcon onClick={() => openModal(index)} />
        </Header>
        <Body ref={bodyRef}>
          <h4>{agreeList[index].title}</h4>
          {agreeList[index].subTitles.map((subTitle, i) => {
            return (
              <div key={uuid()}>
                <h5>{subTitle}</h5>
                <p>{agreeList[index].contents[i]}</p>
              </div>
            );
          })}
        </Body>
        <Blur />
        <Footer>
          {isActive ? (
            <ActiveButton onClick={handleButton}>
              <CheckIcon src={icon} alt='checkIcon' />
              동의합니다
            </ActiveButton>
          ) : (
            <InactiveButton>
              <CheckIcon src={icon} alt='checkIcon' />
              동의합니다
            </InactiveButton>
          )}
        </Footer>
      </ModalBox>
    </ModalContainer>
  );
}

export default Modal;
