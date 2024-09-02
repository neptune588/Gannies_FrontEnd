import { useState } from 'react';

import InputSection from '@/pages/SignUp/components/InputSection';

import {
  ActiveButton,
  InactiveButton,
  Wrapper
} from '@/pages/SignUp/Department/Inputs/Status/style';

function Status({setAllow}) {
  const [isStudent, setIsStudent] = useState(false);
  const [isGraduate, setIsGraduate] = useState(false);

  const updateAllow = (isStudent, isGraduate) => {
    const state = isStudent || isGraduate;
    setAllow((prev) => {
      const newAllow = [...prev];
      newAllow[0] = state;
      return newAllow;
    });
  };

  const handleIsStudent = () => {
    if (isGraduate) {
      setIsGraduate(false);
    }
    setIsStudent(prev => !prev);
    updateAllow(!isStudent, isGraduate);
  };

  const handleIsGraduate = () => {
    if (isStudent) {
      setIsStudent(false);
    }
    setIsGraduate(prev => !prev);
    updateAllow(isStudent, !isGraduate);
  };
  
  return (
    <InputSection $margin="15px" title="학적 구분*">
      <Wrapper>
        <InactiveButton as={isStudent ? ActiveButton : undefined} onClick={handleIsStudent}>
          재학생
        </InactiveButton>
        <InactiveButton as={isGraduate ? ActiveButton : undefined} onClick={handleIsGraduate}>
          졸업생
        </InactiveButton>
      </Wrapper>
    </InputSection>
  );
}

export default Status;