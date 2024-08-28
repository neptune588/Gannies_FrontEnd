import {
  Wrapper,
  Input
} from '@/pages/Home/SearchBar/style';

import search from '@/assets/icons/search/search_default.svg';

function SearchBar() {
  return (
    <Wrapper>
      <form>
        <img src={search} alt='searchIcon' />
        <Input placeholder='관심있는 이야기를 검색해보세요' />
      </form>
      <button>검색</button>
    </Wrapper>
  );
}

export default SearchBar;
