import styled from 'styled-components';

import searchGray from '@/assets/icons/search/search_default.svg';

import { placeholderTextStyle } from '@/styles/commonStyle/text';

const SearchBox = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 265px;
  border-radius: 16px;
  padding: 10px 25px 10px 20px;
  margin-left: 35px;
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

export default function SearchInput() {
  return (
    <SearchBox>
      <input placeholder='회원검색' maxLength={20} />
      <img src={searchGray} alt='serach-icon' />
    </SearchBox>
  );
}
