import { css } from 'styled-components';

const ellipsisStyle = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const centerAlignStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const postsHeaderStyle = css`
  border-top: 2px solid
    ${({ theme: { colors } }) => {
      return colors.gray['50'];
    }};
  border-bottom: 1px solid
    ${({ theme: { colors } }) => {
      return colors.gray['50'];
    }};
`;

export { ellipsisStyle, centerAlignStyle, postsHeaderStyle };
