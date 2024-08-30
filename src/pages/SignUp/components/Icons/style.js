import styled from 'styled-components';

import { instructionTextStyle } from '@/styles/commonStyle/text';
import { xsmall_600 } from '@/styles/commonStyle/localTextStyle';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 456px;
  margin-top: 32px;
  height: 149px;
  position: relative;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 360px;
  margin-left: auto;
  margin-right: auto;
`;

export const Icon = styled.img`
  width: 60px;
  height: 60px;
`;

export const Arrow = styled.img`
  width: 24px;
  height: 24px;
`;

export const FontWrapper = styled.div`
  display: flex;
  width: 348px;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
`;

export const FontActive = styled.span`
  color: ${(props) => props.theme.colors.primary};
  ${xsmall_600}
  margin-top: 8px;
`;

export const FontInactive = styled(FontActive)`
  color: ${(props) => props.theme.colors.gray[50]};
`;

export const FontFinished = styled(FontActive)`
  opacity: 0.5;
`;

export const Instruction = styled.span`
  ${instructionTextStyle};
  margin-top: 53px;
  margin-left: auto;
  margin-right: 8px;
`;
