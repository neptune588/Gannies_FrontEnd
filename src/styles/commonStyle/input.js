import { css } from 'styled-components';

const createPostPageInputStyle = css`
  width: 100%;
  color: ${({ theme: { colors } }) => {
    return colors.black;
  }};
  font-size: ${({ theme: { typo } }) => {
    return typo.size.h4;
  }};
`;

const inputBorderStyle = (props) => {
  if (props.$isValid === false) {
    return `1px solid ${props.theme.colors.negative}`;
  }
  return props.$isFocused
    ? `1px solid ${props.theme.colors.primary}`
    : `1px solid ${props.theme.colors.gray['30']}`;
};

export { createPostPageInputStyle, inputBorderStyle };
