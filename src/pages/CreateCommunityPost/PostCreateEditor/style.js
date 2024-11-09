import styled from 'styled-components';

import { h4_500 } from '@/styles/commonStyle/localTextStyle';

const EditorStylingBox = styled.div`
  .tox {
    margin: 30px 0 15px;
    min-height: 630px;
    .tox-edit-area {
      &::before {
        border: none !important;
      }
    }
    .tox-toolbar__group {
      user-select: none;
      button,
      span {
        cursor: pointer;
      }
    }
    .tox-edit-area__iframe {
      overflow: hidden;
    }
  }
`;

const UploadInput = styled.input`
  display: none;
`;

const NoticeBox = styled.div`
  margin-bottom: 40px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    text-align: left;
    font-size: ${({ theme: { typo } }) => {
      return typo.size.sm;
    }};
    color: ${({ theme: { colors } }) => {
      return colors.gray['70'];
    }};
    margin-bottom: 8px;
    > span {
      font-weight: ${({ theme: { typo } }) => {
        return typo.weight.semiBold;
      }};
      color: ${({ theme: { colors } }) => {
        return colors.gray['80'];
      }};
    }
  }
`;

const SubTitle = styled.h2`
  ${h4_500}
  margin: 10px 0 10px;
  color: ${({ theme: { colors } }) => {
    return colors.primary;
  }};
`;

const UploadFilesBox = styled.ul`
  width: 100%;
  display: flex;
  overflow-y: auto;
  margin-bottom: 60px;
  height: 200px;
  flex-wrap: wrap;
`;

export { EditorStylingBox, UploadInput, NoticeBox, SubTitle, UploadFilesBox };
