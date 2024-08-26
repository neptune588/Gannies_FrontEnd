import {
  ActiveButton,
  Blur,
  Body,
  CheckIcon,
  CloseIcon,
  Footer,
  Header,
  InactiveButton,
  ModalBox
} from '@/pages/SignUp/Identity/Agree/Modal/style';

import {
  useEffect,
  useRef,
  useState
} from 'react';

import ModalContainer from '@/components/ModalContainer';
import inactive from "@/assets/icons/etc/check_circle_inactive.svg";
import active from "@/assets/icons/etc/check_circle_active.svg";


function Modal({ closeModal }) {
  const bodyRef = useRef(null);

  const [scrollTop, setScrollTop] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollClientHeight, setScrollClientHeight] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const Button = isActive ? ActiveButton : InactiveButton;
  const icon = isActive ? active : inactive;
  const clickButton = isActive ? closeModal : undefined;

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
    if (scrollTop && (scrollTop + scrollClientHeight >= scrollHeight - 10)) {
      setIsActive(true);
    }
    else {
      setIsActive(false);
    }
  }, [scrollTop]);

  return (
    <ModalContainer>
      <ModalBox>
        <Header>
          <h3>개인정보 이용약관</h3>
          <CloseIcon onClick={closeModal} />
        </Header>
        <Body ref={bodyRef}>
          <h4>제 1장 총직</h4>
          <div>
            <h5>제1조 [목적]</h5>
            <p>대통령은 제1항과 제2항의 처분 또는 명령을 한 때에는 지체없이 국회에 보고하여 그 승인을 얻어야 한다. 대통령은 법률이 정하는 바에 의하여 훈장 기타의 영전을 수여한다. 근로조건의 기준은 인간의 존엄성을 보장하도록 법률로 정한다. 대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다. </p>
          </div>
          <div>
            <h5>제2조 [정의]</h5>
            <p>대통령은 제1항과 제2항의 처분 또는 명령을 한 때에는 지체없이 국회에 보고하여 그 승인을 얻어야 한다. 대통령은 법률이 정하는 바에 의하여 훈장 기타의 영전을 수여한다. 근로조건의 기준은 인간의 존엄성을 보장하도록 법률로 정한다. 대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다. 사회적 특수계급의 제도는 인정되지 아니하며, 어떠한 형태로도 이를 창설할 수 없다. 대법원장과 대법관이 아닌 법관은 대법관회의의 동의를 얻어 대법원장이 임명한다. 모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며, 법률이 정하는 바에 의하여 최저임금제를 시행하여야 한다. 이 헌법공포 당시의 국회의원의 임기는 제1항에 의한 국회의 최초의 집회일 전일까지로 한다. 헌법재판소의 장은 국회의 동의를 얻어 재판관중에서 대통령이 임명한다. 국가는 청원에 대하여 심사할 의무를 진다. 법관은 헌법과 법률에 의하여 그 양심에 따라 독립하여 심판한다 </p>
          </div>
        </Body>
        <Blur />
        <Footer>
          <Button onClick={clickButton}>
            <CheckIcon src={icon} alt="checkIcon" />
            동의합니다
          </Button>
        </Footer>
      </ModalBox>
    </ModalContainer>
  );
}

export default Modal;
