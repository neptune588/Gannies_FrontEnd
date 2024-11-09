import { useRef, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import useEventHandler from '@/hooks/useEventHandler';
import { isOnlyWhiteSpaceCheck } from '@/utils/whiteSpaceCheck';

export default function usePostSearch() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const location = useLocation();
  const searchDebounceRef = useRef(null);
  const searchBarRef = useRef(null);

  const { changeValue: searchValue, handleChange: handleSearchValueChange } =
    useEventHandler({
      changeDefaultValue: '',
    });

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      if (isOnlyWhiteSpaceCheck(searchValue)) {
        alert('검색어를 한 글자 이상 입력해주세요.');
        return;
      }

      clearTimeout(searchDebounceRef.current);
      searchDebounceRef.current = setTimeout(() => {
        navigate(`/post/search/${searchValue}`);
        handleSearchValueChange('');
        searchBarRef.current && searchBarRef.current.focus();
      }, 100);
    }
  };

  const handleSearchButtonClick = () => {
    const condition =
      searchValue === '' ||
      searchValue === null ||
      searchValue === undefined ||
      isOnlyWhiteSpaceCheck(searchValue);

    condition
      ? alert('검색어를 한 글자 이상 입력해주세요.')
      : navigate(`/post/search/${searchValue}`);

    handleSearchValueChange('');
  };

  useEffect(() => {
    searchBarRef.current && searchBarRef.current.focus();
    return () => {
      clearTimeout(searchDebounceRef.current);
      searchDebounceRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (keyword) {
      handleSearchValueChange(keyword);
    } else {
      handleSearchValueChange('');
    }
  }, [location]);

  return {
    searchValue,
    searchBarRef,
    handleSearchValueChange,
    handleSearch,
    handleSearchButtonClick,
  };
}
