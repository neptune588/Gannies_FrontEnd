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

const adminPageHeaderRowStyle = css`
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

const adminPageCellStyle = css`
  display: flex;
  align-items: center;
  color: ${({ theme: { colors } }) => {
    return colors.gray['90'];
  }};

  &:nth-child(1n) {
    width: 115px;
  }

  &:nth-child(2n) {
    width: ${({ $currentActiveTab }) => {
      if ($currentActiveTab === '신고내역') {
        return '413px';
      } else if (
        $currentActiveTab === '회원관리' ||
        $currentActiveTab === '회원 가입승인'
      ) {
        return '302px';
      } else if ($currentActiveTab === '게시물') {
        return '142px';
      }
    }};
  }

  &:nth-child(3n) {
    width: ${({ $currentActiveTab }) => {
      if (
        $currentActiveTab === '신고내역' ||
        $currentActiveTab === '회원관리'
      ) {
        return '110px';
      } else if ($currentActiveTab === '회원 가입승인') {
        return '134px';
      } else if ($currentActiveTab === '게시물') {
        return '413px';
      }
    }};
  }

  &:nth-child(4n) {
    width: ${({ $currentActiveTab }) => {
      if (
        $currentActiveTab === '신고내역' ||
        $currentActiveTab === '회원관리'
      ) {
        return '110px';
      } else if ($currentActiveTab === '회원 가입승인') {
        return '134px';
      } else if ($currentActiveTab === '게시물') {
        return '110px';
      }
    }};
  }

  &:nth-child(5n) {
    width: ${({ $currentActiveTab }) => {
      if ($currentActiveTab === '신고내역') {
        return '110px';
      } else if ($currentActiveTab === '회원관리') {
        return '131px';
      } else if ($currentActiveTab === '회원 가입승인') {
        return '375px';
      } else if ($currentActiveTab === '게시물') {
        return '519px';
      }
    }};
  }

  &:nth-child(6n) {
    width: ${({ $currentActiveTab }) => {
      if ($currentActiveTab === '신고내역') {
        return '295px';
      } else if ($currentActiveTab === '회원관리') {
        return '110px';
      } else if ($currentActiveTab === '회원 가입승인') {
        return '239px';
      }
    }};
  }

  &:nth-child(7n) {
    width: ${({ $currentActiveTab }) => {
      if ($currentActiveTab === '신고내역') {
        return '146px';
      } else if ($currentActiveTab === '회원관리') {
        return '418px';
      }
    }};
  }
`;

const modalCloseButtonStyle = css`
  position: absolute;
  cursor: pointer;
  user-select: none;
`;

export {
  ellipsisStyle,
  centerAlignStyle,
  postsHeaderStyle,
  adminPageHeaderRowStyle,
  adminPageCellStyle,
  modalCloseButtonStyle,
};
