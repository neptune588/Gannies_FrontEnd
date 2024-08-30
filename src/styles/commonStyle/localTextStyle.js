import { css } from 'styled-components';

const body = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.sm;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.regular;
  }};
`;

const caption = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.tiny;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.semibold;
  }};
`;

const xsmall_400 = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.xs;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.regular;
  }};
`;

const xsmall_500 = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.xs;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.medium;
  }};
`;

const xsmall_600 = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.xs;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.semoBold;
  }};
`;

const xsmall_700 = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.xs;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.bold;
  }};
`;

const small_400 = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.sm;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.regular;
  }};
`;

const small_500 = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.sm;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.medium;
  }};
`;

const small_600 = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.sm;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.semoBold;
  }};
`;

const small_700 = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.sm;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.bold;
  }};
`;

const medium_400 = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.md;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.regular;
  }};
`;

const medium_500 = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.md;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.medium;
  }};
`;

const medium_600 = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.md;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.semoBold;
  }};
`;

const large_400 = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.lg;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.regular;
  }};
`;

const large_500 = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.lg;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.medium;
  }};
`;

const large_600 = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.lg;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.semoBold;
  }};
`;

const large_700 = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.lg;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.bold;
  }};
`;

const h4_400 = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.h4;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.regular;
  }};
`;
const h4_500 = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.h4;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.medium;
  }};
`;

const h4_600 = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.h4;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.semoBold;
  }};
`;

const h3_600 = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.h3;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.semoBold;
  }};
`;
const h3_700 = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.h3;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.bold;
  }};
`;

const h2_600 = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.h2;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.semoBold;
  }};
`;

const h1_600 = css`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.h1;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.semoBold;
  }};
`;

export {
  body,
  caption,
  xsmall_400,
  xsmall_500,
  xsmall_600,
  xsmall_700,
  small_400,
  small_500,
  small_600,
  small_700,
  medium_400,
  medium_500,
  medium_600,
  large_400,
  large_500,
  large_600,
  large_700,
  h4_400,
  h4_500,
  h4_600,
  h3_600,
  h3_700,
  h2_600,
  h1_600,
};
