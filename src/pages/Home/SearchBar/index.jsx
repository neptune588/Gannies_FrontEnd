import {
  Wrapper,
  SearchBarWrapper,
  SearchIcon,
  Input,
  Button,
} from '@/pages/Home/SearchBar/style';

import search from '@/assets/icons/search/search_default.svg';

function SearchBar() {
  return (
    <Wrapper>
      <SearchBarWrapper>
        <SearchIcon src={search} alt='searchIcon' />
        <Input placeholder='관심있는 이야기를 검색해보세요' />
      </SearchBarWrapper>
      <Button>검색</Button>
    </Wrapper>
  );
}

export default SearchBar;
