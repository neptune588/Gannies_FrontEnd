import { useState } from 'react';

import search from '@/assets/icons/search/search_default.svg';

import {
  Wrapper,
  Input,
  InactiveButton,
  ActiveButton,
} from '@/pages/Home/SearchBar/style';

function SearchBar() {
  const [text, setText] = useState('');
  const [allowButton, setAllowButton] = useState(false);

  const handlePassword = (e) => {
    setAllowButton(e.target.value.length >= 1);
    setText(e.target.value);
  };

  return (
    <Wrapper>
      <form>
        <img src={search} alt='searchIcon' />
        <Input
          placeholder='관심있는 이야기를 검색해보세요'
          value={text}
          onChange={handlePassword}
        />
      </form>
      {allowButton ? (
        <ActiveButton>검색</ActiveButton>
      ) : (
        <InactiveButton>검색</InactiveButton>
      )}
    </Wrapper>
  );
}

export default SearchBar;
