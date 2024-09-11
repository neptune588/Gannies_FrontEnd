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
  if (props.isFocused) {
    return `1px solid ${props.theme.colors.primary}`;
  }
  return props.isFocused === undefined
    ? `1px solid ${props.theme.colors.gray['30']}`
    : `1px solid ${props.theme.colors.negative}`;
};

export { createPostPageInputStyle, inputBorderStyle };
