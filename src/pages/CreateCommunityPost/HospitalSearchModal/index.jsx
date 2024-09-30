import { useState, useRef, useEffect } from 'react';
import uuid from 'react-uuid';

import ModalContainer from '@/components/ModalContainer';
import ModalCloseArea from '@/components/ModalCloseArea';
import HospitalSearchLoadingCircle from '@/components/LoadingCircle/HospitalSearchLoadingCircle';

import searchIcon from '@/assets/icons/search/search_black.svg';
import cross from '@/assets/icons/etc/close.svg';

import {
  ModalWrapper,
  ModalInnerLeftBox,
  SearchInputArea,
  SearchListBox,
  SearchList,
  ClickArea,
  SelectConfirmButton,
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
  const searchInput = useRef(null);

  const [isSearch, setIsSearch] = useState(false);
  const [hospitalLists, setHospitalLists] = useState([]);

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

      const { documents } = res.data;
      setHospitalLists(() => {
        return documents.map((list) => {
          return { ...list, isListClick: false };
        });
      });
      //console.log(documents);
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

  const handleListClick = (idx) => {
    setHospitalLists(() => {
      return hospitalLists.map((list, innerIdx) => {
        return {
          ...list,
          isListClick: idx === innerIdx ? !list.isListClick : false,
        };
      });
    });
  };

  const dataReset = () => {
    handlehospitalSearchValueChange('');
    setHospitalLists([]);
  };

  useEffect(() => {
    if (searchInput.current) {
      searchInput.current.focus();
    }
  }, []);
  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalCloseButton
          type='button'
          onClick={() => {
            handleModalClose({ modalDispatch: setIsHospitalModal });
            dataReset();
          }}
        >
          <img src={cross} alt='close-button' />
        </ModalCloseButton>
        <ModalInnerLeftBox>
          <h2>병원찾기</h2>
          <SearchInputArea>
            <input
              type='text'
              ref={searchInput}
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
          <SearchListBox>
            {isSearch && <HospitalSearchLoadingCircle />}
            {hospitalLists.map((hospital, idx) => {
              return (
                <SearchList key={uuid()} $isListClick={hospital.isListClick}>
                  {hospital.isListClick && (
                    <SelectConfirmButton
                      type='button'
                      onClick={() => {
                        SetHospitalName(hospital.place_name);
                        handleModalClose({ modalDispatch: setIsHospitalModal });
                        dataReset();
                      }}
                    >
                      선택
                    </SelectConfirmButton>
                  )}
                  <ClickArea
                    onClick={() => {
                      handleListClick(idx);
                    }}
                  />
                  <HospitalName>{hospital.place_name}</HospitalName>
                  <HospitalLocationInfo>
                    <p>{hospital.address_name}</p>
                    <p>{hospital.road_address_name}</p>
                  </HospitalLocationInfo>
                  <HospitalContact>{hospital.phone}</HospitalContact>
                </SearchList>
              );
            })}
          </SearchListBox>
        </ModalInnerLeftBox>
        <ModalInnerRightBox></ModalInnerRightBox>
      </ModalWrapper>
      <ModalCloseArea
        handleModalClose={() => {
          handleModalClose({ modalDispatch: setIsHospitalModal });
          dataReset();
        }}
      />
    </ModalContainer>
  );
}
