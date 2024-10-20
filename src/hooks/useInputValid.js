import { useState } from 'react';

export function useInputValid(initialState = undefined, validate = null) {
  const [isFocused, setIsFocused] = useState(initialState);
  const checkDuplicate = async (value, key, api) => {
    try {
      const response = await api({ [key]: value });
      if (response.status === 201) {
        return response.data.available;
      }
    } catch (error) {
      alert('닉네임 중복 확인 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const focusIfEmpty = (numAllow, handleAllow) => {
    handleAllow(numAllow, false);
    return 1;
  };

  const blurIfEmpty = (numAllow, handleAllow) => {
    handleAllow(numAllow, undefined);
    return undefined;
  };

  const checkIsValid = async (value, key = null, api = null) => {
    if (!value) {
      return 1;
    } else if (validate && key && !api) {
      return validate(value, key) ? 0 : 2;
    } else if (validate && !validate(value)) {
      return 2;
    } else if (key && api) {
      const response = await checkDuplicate(value, key, api);
      if (!response) return 3;
    }
    return 0;
  };

  return {
    isFocused,
    focusIfEmpty,
    blurIfEmpty,
    setIsFocused,
    checkIsValid,
  };
}
