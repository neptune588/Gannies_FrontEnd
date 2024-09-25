import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

function SignUp() {
  const [steps, setSteps] = useState([false, false, false]);

  const stepsIcon = [
    ['active', 'inactive', 'inactive'],
    ['finished', 'active', 'inactive'],
    ['finished', 'finished', 'active'],
  ];

  const [dataToSend, setDataToSend] = useState({
    nickname: '',
    email: '',
    phoneNumber: '',
    password: '',
    status: '',
    certificationDocumentUrl: '',
  });

  const handleSteps = (index, value) => {
    setSteps((prev) => prev.map((step, idx) => (idx === index ? value : step)));
  };

  const handleDataToSend = (field, data) => {
    setDataToSend((prev) => ({
      ...prev,
      [field]: data,
    }));
  };

  return (
    <Outlet
      context={{ steps, handleSteps, stepsIcon, dataToSend, handleDataToSend }}
    />
  );
}

export default SignUp;
