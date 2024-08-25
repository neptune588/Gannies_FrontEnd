import {
  defaultBorderBoxStyle,
  placeholderTextStyle
} from "@/styles/commonStyle";

import Input from "@/components/Input";
import styled from "styled-components";

export const InputWrapper = styled.form`
  ${defaultBorderBoxStyle};
  width: 456px;
  height: 48px;
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const InputBox = styled(Input)`
  padding-left: 16px;
  margin-right: 16px;
  width: 406px;
  height: 40px;
  border-radius: 4px;

  &::placeholder {
    ${placeholderTextStyle};
  }
`;