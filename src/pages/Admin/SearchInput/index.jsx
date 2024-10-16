import { useState, useEffect } from 'react';
import styled from 'styled-components';

import AlignSelectMenu from '@/components/AlignSelectMenu';

import searchGray from '@/assets/icons/search/search_default.svg';

import useEventHandler from '@/hooks/useEventHandler';

import { adminPageUserSearchTypes } from '@/components/AlignSelectMenu/data';

import { communityPostMaxLimit } from '@/utils/itemLimit';
import { isIncludesWhiteSpaceCheck } from '@/utils/whiteSpaceCheck';
import { errorAlert } from '@/utils/sweetAlert';

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
  }
`;

export default function SearchInput({
  currentPageNumber,
  setQuery,
  setActionType,
  setCurrentPageNumber,
}) {
  const [serachTypes] = useState(adminPageUserSearchTypes);
  const [selectedSearchType, setSelectedSearchType] = useState(
    adminPageUserSearchTypes[0].label
  );
  const [selectedSearchTypeQuery, setSelectedSearchTypeQuery] = useState(
    adminPageUserSearchTypes[0].query
  );
  const [isSearch, setIsSearch] = useState(false);

  const { changeValue: searchValue, handleChange: handleValueChange } =
    useEventHandler({
      changeDefaultValue: '',
    });

  const handleSearch = async (e) => {
    if (isSearch) {
      return;
    }

    if (e.key === 'Enter') {
      if (isIncludesWhiteSpaceCheck(searchValue)) {
        errorAlert('검색어에 공백이 들어갈 수 없습니다!');
        return;
      }

      setIsSearch(true);
      setActionType('');
      setCurrentPageNumber(1);
      setQuery({
        page: currentPageNumber,
        limit: communityPostMaxLimit,
        type: selectedSearchTypeQuery,
        search: searchValue,
      });
      setIsSearch(false);
    }
  };

  return (
    <>
      <AlignSelectMenu
        optionList={serachTypes}
        pageType={'admin'}
        selectedOption={selectedSearchType}
        setSelectedOption={setSelectedSearchType}
        handleSelectedOption={setSelectedSearchTypeQuery}
      />
      <SearchBox>
        <input
          type='text'
          placeholder='회원검색'
          maxLength={50}
          value={searchValue}
          onChange={(e) => {
            handleValueChange(e.target.value);
          }}
          onKeyUp={handleSearch}
        />
        <img src={searchGray} alt='serach-icon' />
      </SearchBox>
    </>
  );
}
