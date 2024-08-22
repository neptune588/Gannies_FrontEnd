import { css } from 'styled-components';

const defaultBorderBoxStyle = css`
  border: 1px solid
    ${({ theme: { colors } }) => {
      return colors.gray['40'];
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

const bannerTitleStyle = css`
  color: ${({ theme: { colors } }) => {
    return colors.black;
  }};
  font-size: ${({ theme: { typo } }) => {
    return typo.size.h4;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.semiBold;
  }};
`;

const bannerTextStyle = css`
  color: ${({ theme: { colors } }) => {
    return colors.gray['60'];
  }};
  font-size: ${({ theme: { typo } }) => {
    return typo.size.lg;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.regular;
  }};
`;

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

const paginationWrapperStyle = css`
  display: flex;
  width: 580px;
`;

const pageArrowWrapperStyle = css`
  display: flex;
  align-items: center;
  >div: first-child {
    margin-right: 6px;
  }
`;

const pageNumberWrapperStlye = css`
  display: flex;
  align-items: center;

  li {
    margin: 0 4.5px;
  }
  > li:first-child {
    margin-left: 30px;
  }
  > li:last-child {
    margin-right: 30px;
  }
`;

export {
  defaultBorderBoxStyle,
  primaryColorBoxStyle,
  primaryBorderBoxStyle,
  bannerTitleStyle,
  bannerTextStyle,
  ellipsisStyle,
  centerAlignStyle,
  paginationWrapperStyle,
  pageArrowWrapperStyle,
  pageNumberWrapperStlye,
};
