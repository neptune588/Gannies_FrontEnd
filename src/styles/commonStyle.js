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

export {
  defaultBorderBoxStyle,
  primaryColorBoxStyle,
  primaryBorderBoxStyle,
  bannerTitleStyle,
  bannerTextStyle,
  ellipsisStyle,
};
