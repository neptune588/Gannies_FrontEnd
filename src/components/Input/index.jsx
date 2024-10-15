import { InputBox } from '@/components/Input/style';
import React from 'react';

function Input(props, ref) {
  return <InputBox ref={ref ? ref : null} {...props} />;
}

export default React.forwardRef(Input);
