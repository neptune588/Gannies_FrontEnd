import styled from 'styled-components';

import { placeholderTextStyle } from '@/styles/commonStyle/text';
import { small_400 } from '@/styles/commonStyle/localTextStyle';

export const InputBox = styled.input`
  border: none;
  outline: none;
  ${small_400}
  background-color: ${(props) => props.theme.colors.white};

  &::placeholder {
    ${placeholderTextStyle};
  }
`;
