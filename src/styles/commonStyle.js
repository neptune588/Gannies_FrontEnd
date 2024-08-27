import { css } from 'styled-components';

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

const pageNumberWrapperStyle = css`
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

const createPostPageInputBoxStyle = css`
  border-bottom: 1px solid
    ${({ theme: { colors } }) => {
      return colors.gray['60'];
    }};
  padding: 0 15px 15px 15px;
`;

const createPostPageInputStyle = css`
  width: 100%;
  color: ${({ theme: { colors } }) => {
    return colors.black;
  }};
  font-size: ${({ theme: { typo } }) => {
    return typo.size.h4;
  }};
`;

const instructionTextStyle = css`
  color: ${({ theme: { colors } }) => {
    return colors.gray['60'];
  }};
  font-size: ${({ theme: { typo } }) => {
    return typo.size.xs;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.medium;
  }};
`;

const authTitleTextStyle = css`
  color: ${({ theme: { colors } }) => {
    return colors.gray.primary;
  }};
  font-size: ${({ theme: { typo } }) => {
    return typo.size.h3;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.semiBold;
  }};
`;

const placeholderTextStyle = css`
  font-size: ${(props) => props.theme.typo.size.sm};
  font-weight: ${(props) => props.theme.typo.weight.regular};
  color: ${(props) => props.theme.colors.gray[40]};
`;

const authDefaultTextStyle = css`
  font-size: ${(props) => props.theme.typo.size.sm};
  font-weight: ${(props) => props.theme.typo.weight.regular};
  color: ${(props) => props.theme.colors.gray[100]};
`;

const authEmailColorBoxStyle = css`
  background-color: ${(props) => props.theme.colors.gray[10]};
  font-size: ${(props) => props.theme.typo.size.md};
  font-weight: ${(props) => props.theme.typo.weight.semiBold};
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

export {
  defaultBorderBoxStyle,
  primaryColorBoxStyle,
  inactiveColorBoxStyle,
  disabledColorBoxStyle,
  primaryBorderBoxStyle,
  bannerTitleStyle,
  bannerTextStyle,
  ellipsisStyle,
  centerAlignStyle,
  paginationWrapperStyle,
  pageArrowWrapperStyle,
  pageNumberWrapperStyle,
  createPostPageInputBoxStyle,
  createPostPageInputStyle,
  instructionTextStyle,
  authTitleTextStyle,
  placeholderTextStyle,
  authDefaultTextStyle,
  authEmailColorBoxStyle,
  modalBoxStyle,
  postsHeaderStyle,
};
