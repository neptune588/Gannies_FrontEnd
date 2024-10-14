import search from '@/assets/icons/search/search_default.svg';

import { Wrapper, Input, SearchButton } from '@/pages/Home/SearchBar/style';

import usePostSearch from '@/hooks/usePostSearch';

function SearchBar() {
  const {
    searchValue,
    searchBarRef,
    handleSearchValueChange,
    handleSearch,
    handleSearchButtonClick,
  } = usePostSearch();

  return (
    <Wrapper>
      <div>
        <img src={search} alt='searchIcon' />
        <Input
          ref={searchBarRef}
          placeholder='관심있는 이야기를 검색해보세요'
          value={searchValue}
          onChange={(e) => {
            handleSearchValueChange(e.target.value);
          }}
          onKeyUp={handleSearch}
        />
      </div>

      <SearchButton onClick={handleSearchButtonClick}>검색</SearchButton>
    </Wrapper>
  );
}

export default SearchBar;
