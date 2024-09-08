import styled from 'styled-components';

import Negative from '@/components/Instruction/Negative';

const NegativeBox = styled.div`
  width: 456px;
`;

function NegativeInstruction() {
  return (
    <NegativeBox>
      <Negative text='일치하는 회원 정보가 없습니다' />
    </NegativeBox>
  );
}

export default NegativeInstruction;
