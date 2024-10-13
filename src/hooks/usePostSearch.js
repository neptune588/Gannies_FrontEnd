import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useEventHandler from '@/hooks/useEventHandler';

export default function () {
  const navigate = useNavigate();
  const searchBarRef = useRef(null);

  const { changeValue: searchValue, handleChange: handleSearchValueChange } =
    useEventHandler({
      changeDefaultValue: '',
    });

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const condition =
        searchValue === '' || searchValue === null || searchValue === undefined;

      condition
        ? navigate(`/post/search/default`)
        : navigate(`/post/search/${searchValue}`);
    }
    handleSearchValueChange('');
    searchBarRef.current && searchBarRef.current.focus();
  };

  const handleSearchButtonClick = () => {
    const condition =
      searchValue === '' || searchValue === null || searchValue === undefined;

    condition
      ? navigate(`/post/search/default`)
      : navigate(`/post/search/${searchValue}`);

    handleSearchValueChange('');
  };

  useEffect(() => {
    searchBarRef.current && searchBarRef.current.focus();
  }, []);

  return {
    searchValue,
    searchBarRef,
    handleSearchValueChange,
    handleSearch,
    handleSearchButtonClick,
  };
}
