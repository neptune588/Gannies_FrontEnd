import styled from 'styled-components';

import { instructionTextStyle } from '@/styles/commonStyle/text';
import { h3_600 } from '@/styles/commonStyle/localTextStyle';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 53px;
`;

export const Font = styled.span`
  ${h3_600}
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 21px;
`;

export const Instruction = styled.span`
  ${instructionTextStyle};
`;
