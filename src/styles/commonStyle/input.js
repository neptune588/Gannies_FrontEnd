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

export { createPostPageInputStyle };
