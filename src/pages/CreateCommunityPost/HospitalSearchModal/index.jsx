import { useState } from 'react';

import ModalContainer from '@/components/ModalContainer';
import ModalCloseArea from '@/components/ModalCloseArea';
import LoadingCircle from '@/components/LoadingCircle';

import searchIcon from '@/assets/icons/search/search_black.svg';
import cross from '@/assets/icons/etc/close.svg';

import {
  ModalWrapper,
  ModalInnerLeftBox,
  SearchInputArea,
  SearchListBox,
  SearchList,
  HospitalName,
  HospitalLocationInfo,
  HospitalContact,
  ModalInnerRightBox,
  ModalCloseButton,
} from '@/pages/CreateCommunityPost/HospitalSearchModal/style';

import { setIsHospitalModal } from '@/store/modalsControl';

import { getHospitals } from '@/api/hospitalSearchApi';

export default function HospitalSearchModal({
  handleModalClose,
  hospitalSearchValue,
  handlehospitalSearchValueChange,
  SetHospitalName,
}) {
  const [isSearch, setIsSearch] = useState(false);

  const hospitalSearch = async () => {
    if (
      hospitalSearchValue === '' ||
      hospitalSearchValue === null ||
      hospitalSearchValue === undefined
    ) {
      alert('검색어를 입력 해주세요');
      return;
    }

    setIsSearch(true);
    try {
      const res = await getHospitals({
        query: hospitalSearchValue,
        category_group_code: 'HP8',
      });

      console.log(res);
    } catch (error) {
      console.error(error);
    }
    setIsSearch(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (e.key === 'Enter') {
      hospitalSearch();
    }
  };

  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalCloseButton
          type='button'
          onClick={() => {
            handleModalClose({ modalDispatch: setIsHospitalModal });
          }}
        >
          <img src={cross} alt='close-button' />
        </ModalCloseButton>
        <ModalInnerLeftBox>
          <h2>병원찾기</h2>
          <SearchInputArea>
            <input
              type='text'
              value={hospitalSearchValue}
              placeholder='병원을 입력하세요.'
              onKeyUp={(e) => {
                handleSearch(e);
              }}
              onChange={(e) => {
                handlehospitalSearchValueChange(e.target.value);
              }}
              maxLength={35}
            />
            <button type='button' onClick={hospitalSearch}>
              <img src={searchIcon} alt='search-icon' />
            </button>
          </SearchInputArea>
          {isSearch && <LoadingCircle></LoadingCircle>}
          {/*           <SearchListBox>
            <SearchList>
              <HospitalName>강남세브란스 병원</HospitalName>
              <HospitalLocationInfo>
                <p>서울 강남구 언주로 211 / 도곡동 146-92</p>
                <p>06273</p>
              </HospitalLocationInfo>
              <HospitalContact>1599-6114</HospitalContact>
            </SearchList>
          </SearchListBox> */}
        </ModalInnerLeftBox>
        <ModalInnerRightBox></ModalInnerRightBox>
      </ModalWrapper>
      <ModalCloseArea
        handleModalClose={() => {
          handleModalClose({ modalDispatch: setIsHospitalModal });
        }}
      />
    </ModalContainer>
  );
}
