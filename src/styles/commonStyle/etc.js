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

  &:nth-child(1) {
    width: 115px;
  }

  &:nth-child(2) {
    display: inline-block;
    ${ellipsisStyle}
    text-align: left;
    width: ${({ $currentActiveTab }) => {
      if ($currentActiveTab === '신고내역') {
        return '413px';
      } else if (
        $currentActiveTab === '회원관리' ||
        $currentActiveTab === '회원 가입승인'
      ) {
        return '115px';
      } else if ($currentActiveTab === '게시물 관리') {
        return '142px';
      }
    }};
  }

  &:nth-child(3) {
    width: ${({ $currentActiveTab }) => {
      if ($currentActiveTab === '신고내역') {
        return '110px';
      } else if (
        $currentActiveTab === '회원관리' ||
        $currentActiveTab === '회원 가입승인'
      ) {
        return '303px';
      } else if ($currentActiveTab === '게시물 관리') {
        return '413px';
      }
    }};
  }

  &:nth-child(4) {
    width: ${({ $currentActiveTab }) => {
      if (
        $currentActiveTab === '신고내역' ||
        $currentActiveTab === '회원관리'
      ) {
        return '110px';
      } else if ($currentActiveTab === '회원 가입승인') {
        return '134px';
      } else if ($currentActiveTab === '게시물 관리') {
        return '110px';
      }
    }};
  }

  &:nth-child(5) {
    width: ${({ $currentActiveTab }) => {
      if (
        $currentActiveTab === '신고내역' ||
        $currentActiveTab === '회원관리'
      ) {
        return '110px';
      } else if ($currentActiveTab === '회원 가입승인') {
        return '134px';
      } else if ($currentActiveTab === '게시물 관리') {
        return '519px';
      }
    }};
  }

  &:nth-child(6) {
    ${ellipsisStyle}
    display: ${({ $currentActiveTab }) => {
      $currentActiveTab === '회원관리' ? 'flex' : 'inline-blcok';
    }};
    align-items: ${({ $currentActiveTab }) => {
      $currentActiveTab === '회원관리' && 'center';
    }};
    width: ${({ $currentActiveTab }) => {
      if ($currentActiveTab === '신고내역') {
        return '295px';
      } else if ($currentActiveTab === '회원관리') {
        return '134px';
      } else if ($currentActiveTab === '회원 가입승인') {
        return '375px';
      }
    }};
  }

  &:nth-child(7) {
    width: ${({ $currentActiveTab }) => {
      if ($currentActiveTab === '신고내역') {
        return '146px';
      } else if ($currentActiveTab === '회원관리') {
        return '110px';
      } else if ($currentActiveTab === '회원 가입승인') {
        return '125px';
      }
    }};
  }

  &:nth-child(8) {
    ${ellipsisStyle}
    display: inline-block;
    width: ${({ $currentActiveTab }) => {
      if ($currentActiveTab === '회원관리') {
        return '303px';
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
