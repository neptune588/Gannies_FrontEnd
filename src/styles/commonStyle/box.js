import { css } from 'styled-components';

import { small_400, medium_600 } from '@/styles/commonStyle/localTextStyle';

const defaultBorderBoxStyle = css`
  border: 1px solid
    ${({ theme: { colors } }) => {
      return colors.gray['30'];
    }};
  border-radius: 4px;
`;

const primaryColorBoxStyle = css`
  color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  background-color: ${({ theme: { colors } }) => {
    return colors.primary;
  }};
  border-radius: 4px;
`;

const inactiveColorBoxStyle = css`
  color: ${({ theme: { colors } }) => {
    return colors.gray[60];
  }};
  background-color: ${({ theme: { colors } }) => {
    return colors.gray[20];
  }};
  border-radius: 4px;
`;

const disabledColorBoxStyle = css`
  ${inactiveColorBoxStyle}
  opacity: 0.5;
`;

const primaryBorderBoxStyle = css`
  color: ${({ theme: { colors } }) => {
    return colors.primary;
  }};
  border: 1px solid
    ${({ theme: { colors } }) => {
      return colors.primary;
    }};
  border-radius: 4px;
`;

const createPostPageInputBoxStyle = css`
  border-bottom: 1px solid
    ${({ theme: { colors } }) => {
      return colors.gray['60'];
    }};
  padding: 0 15px 15px 15px;
`;

const authEmailColorBoxStyle = css`
  background-color: ${(props) => props.theme.colors.gray[10]};
  ${medium_600}
  color: ${(props) => props.theme.colors.primary};
  width: 336px;
  height: 58px;
  padding-left: 13px;
  padding-right: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const modalBoxStyle = css`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const adminPageModalInnerDataBoxStyle = css`
  ${small_400}
  color: ${({ theme: { colors } }) => {
    return colors.gray['100'];
  }};
  background-color: ${({ theme: { colors } }) => {
    return colors.gray['10'];
  }};
  border-radius: 8px;
  padding: 15px 20px;
`;

export {
  defaultBorderBoxStyle,
  primaryColorBoxStyle,
  inactiveColorBoxStyle,
  disabledColorBoxStyle,
  primaryBorderBoxStyle,
  createPostPageInputBoxStyle,
  authEmailColorBoxStyle,
  modalBoxStyle,
  adminPageModalInnerDataBoxStyle,
};
