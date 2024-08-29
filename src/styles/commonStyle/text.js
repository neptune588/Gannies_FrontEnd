import { css } from 'styled-components';

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

export {
  bannerTitleStyle,
  bannerTextStyle,
  instructionTextStyle,
  authTitleTextStyle,
  placeholderTextStyle,
  authDefaultTextStyle,
};
