import { useState } from 'react';

export function useInputValid(initialState = undefined, validate) {
  const [isFocused, setIsFocused] = useState(initialState);
  const checkDuplicate = async (value, key, api) => {
    try {
      console.log({ [key]: value });
      const response = await api({ [key]: value });
      if (response.status === 201) {
        return response.data.available;
      }
    } catch (error) {
      alert('닉네임 중복 확인 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const checkIsValid = async (value, key = null, api = null) => {
    if (!value) {
      return 1;
    } else if (!validate(value)) {
      return 2;
    } else if (api) {
      const response = await checkDuplicate(value, key, api);
      if (!response) return 3;
    }
    return 0;
  };

  return {
    isFocused,
    setIsFocused,
    checkIsValid,
  };
}
