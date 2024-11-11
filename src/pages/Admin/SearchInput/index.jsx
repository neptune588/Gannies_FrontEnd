import styled from 'styled-components';

import searchGray from '@/assets/icons/search/search_default.svg';

import { placeholderTextStyle } from '@/styles/commonStyle/text';

import { isIncludesWhiteSpaceCheck } from '@/utils/whiteSpaceCheck';
import { errorAlert } from '@/utils/sweetAlert';

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
  > button {
    width: 24px;
    height: 24px;
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
            if (e.key === 'Enter') {
              if (isIncludesWhiteSpaceCheck(searchValue)) {
                errorAlert('검색어 사이에 공백이 들어갈 수 없습니다!');
                return;
              }
              handleSearch();
            }
          }}
        />
        <button type='button' onClick={handleSearch}>
          <img src={searchGray} alt='serach-icon' />
        </button>
      </SearchBox>
    </>
  );
}
