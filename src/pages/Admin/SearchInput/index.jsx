import { useState } from 'react';
import styled from 'styled-components';

import searchGray from '@/assets/icons/search/search_default.svg';

import useEventHandler from '@/hooks/useEventHandler';

import { placeholderTextStyle } from '@/styles/commonStyle/text';

const SearchBox = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 265px;
  border-radius: 16px;
  padding: 10px 25px 10px 20px;
  margin-left: 15px;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  > input {
    width: 90%;

    &::placeholder {
      ${placeholderTextStyle}
    }
  }
  > img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

export default function SearchInput({
  searchValue,
  handleSearchValueChange,
  handleSearch,
}) {
  return (
    <>
      <SearchBox>
        <input
          type='text'
          placeholder={'검색어를 입력 해주세요.'}
          maxLength={50}
          value={searchValue}
          onChange={(e) => {
            handleSearchValueChange(e.target.value);
          }}
          onKeyUp={(e) => {
            handleSearch(e);
          }}
        />
        <img src={searchGray} alt='serach-icon' />
      </SearchBox>
    </>
  );
}
