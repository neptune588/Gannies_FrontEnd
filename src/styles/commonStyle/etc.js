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

const adminPageListHeaderStyle = css`
  display: flex;
  padding-bottom: 24px;
  align-items: center;
  border-bottom: 1px solid
    ${({ theme: { colors } }) => {
      return colors.black;
    }};
  color: ${({ theme: { colors } }) => {
    return colors.gray['80'];
  }};
  font-size: ${({ theme: { typo } }) => {
    return typo.size.xs;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.bold;
  }};
`;

const adminPageListStyle = css`
  display: flex;
  padding: 28px 0;
  border-bottom: 1px solid
    ${({ theme: { colors } }) => {
      return colors.black;
    }};
  &:last-child {
    border: none;
  }
  &:first-child {
    border-bottom: 1px solid
      ${({ theme: { colors } }) => {
        return colors.black;
      }};
  }
`;

const adminPageContentStyle = css`
  text-align: left;
  &:nth-child(1n) {
    width: 115px;
  }
  &:nth-child(2n) {
    width: 413px;
  }
  &:nth-child(3n) {
    width: 110px;
  }
  &:nth-child(4n) {
    width: 110px;
  }
  &:nth-child(5n) {
    width: 110px;
  }
  &:nth-child(6n) {
    width: 295px;
  }
  &:nth-child(7n) {
    width: 146px;
  }
`;

const modalCloseAreaStyle = css`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export {
  ellipsisStyle,
  centerAlignStyle,
  postsHeaderStyle,
  adminPageListHeaderStyle,
  adminPageListStyle,
  adminPageContentStyle,
  modalCloseAreaStyle,
};
