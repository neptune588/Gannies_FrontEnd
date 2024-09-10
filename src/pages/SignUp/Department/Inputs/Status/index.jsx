import { useState } from 'react';

import InputSection from '@/pages/SignUp/components/InputSection';

import {
  ActiveButton,
  InactiveButton,
  Wrapper,
} from '@/pages/SignUp/Department/Inputs/Status/style';
import { useOutletContext } from 'react-router-dom';

function Status({ handleAllow }) {
  const { handleDataToSend } = useOutletContext();
  const [isStudent, setIsStudent] = useState(false);
  const [isGraduate, setIsGraduate] = useState(false);

  const updateAllow = (isStudent, isGraduate) => {
    const state = isStudent || isGraduate;
    handleAllow(0, state);
    const getStatusValue = () => {
      if (state === isStudent) return 'current_student';
      else if (state === isGraduate) return 'graduated_student';
      return '';
    };
    handleDataToSend(getStatusValue());
  };

  const handleIsStudent = () => {
    if (isGraduate) {
      setIsGraduate(false);
    }
    setIsStudent((prev) => !prev);
    updateAllow(!isStudent, isGraduate);
  };

  const handleIsGraduate = () => {
    if (isStudent) {
      setIsStudent(false);
    }
    setIsGraduate((prev) => !prev);
    updateAllow(isStudent, !isGraduate);
  };

  return (
    <InputSection $margin='15px' title='학적 구분*'>
      <Wrapper>
        <InactiveButton
          as={isStudent && ActiveButton}
          onClick={handleIsStudent}
        >
          재학생
        </InactiveButton>
        <InactiveButton
          as={isGraduate && ActiveButton}
          onClick={handleIsGraduate}
        >
          졸업생
        </InactiveButton>
      </Wrapper>
    </InputSection>
  );
}

export default Status;
