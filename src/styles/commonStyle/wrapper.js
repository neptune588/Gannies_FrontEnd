import { css } from 'styled-components';

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
