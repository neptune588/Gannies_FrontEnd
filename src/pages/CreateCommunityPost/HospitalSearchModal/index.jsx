import { useState, useRef, useEffect } from 'react';
import uuid from 'react-uuid';

import ModalContainer from '@/components/ModalContainer';
import ModalCloseArea from '@/components/ModalCloseArea';
import HospitalSearchLoadingCircle from '@/components/Loading/HospitalSearchLoadingCircle';
import KakaoMap from '@/pages/CreateCommunityPost/HospitalSearchModal/KakaoMap';

import searchIcon from '@/assets/icons/search/search_black.svg';
import cross from '@/assets/icons/etc/close.svg';

import {
  ModalWrapper,
  ModalInnerLeftBox,
  SearchInputArea,
  SearchListBox,
  SearchList,
  SearchListEmpty,
  ClickArea,
  SelectConfirmButton,
  HospitalName,
  HospitalLocationInfo,
  HospitalContact,
  ModalInnerRightBox,
  ModalCloseButton,
} from '@/pages/CreateCommunityPost/HospitalSearchModal/style';

import { getHospitals } from '@/api/hospitalSearchApi';

export default function HospitalSearchModal({
  handleModalClose,
  hospitalSearchValue,
  handlehospitalSearchValueChange,
  setHospitalName,
}) {
  const searchInput = useRef(null);

  //검색어 입력 -> 리스트 선택 -> keyword 갱신 -> 리스트 선택됐는지 검사 -> 선택 됐을시 -> 맵 불러오기전까지 loading

  const [isSearch, setIsSearch] = useState(false);
  const [isMapSearch, setIsMapSearch] = useState(false);
  const [hospitalLists, setHospitalLists] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [isListSelected, setIsListSelected] = useState(false);

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
      documents.length === 0
        ? setHospitalLists(null)
        : setHospitalLists(() => {
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

    setKeyword(hospitalLists[idx].place_name);
  };

  const dataReset = () => {
    handlehospitalSearchValueChange('');
    setHospitalLists([]);
    setKeyword('');
  };

  useEffect(() => {
    if (searchInput.current) {
      searchInput.current.focus();
    }
  }, []);

  useEffect(() => {
    hospitalLists &&
      setIsListSelected(() => {
        return hospitalLists.some((list) => list.isListClick);
      });
  }, [hospitalLists]);

  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalCloseButton
          type='button'
          onClick={() => {
            handleModalClose({ modalName: 'isHospitalModal' });
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
            {hospitalLists ? (
              hospitalLists.map((hospital, idx) => {
                return (
                  <SearchList key={uuid()} $isListClick={hospital.isListClick}>
                    {hospital.isListClick && (
                      <SelectConfirmButton
                        type='button'
                        onClick={() => {
                          setHospitalName(hospital.place_name);
                          handleModalClose({
                            modalName: 'isHospitalModal',
                          });
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
              })
            ) : (
              <SearchListEmpty>
                입력한 검색어와 일치하는 병원을 찾지 못했습니다.
              </SearchListEmpty>
            )}
          </SearchListBox>
        </ModalInnerLeftBox>
        <ModalInnerRightBox>
          {isListSelected && (
            <>
              {isMapSearch ? (
                <HospitalSearchLoadingCircle />
              ) : (
                <KakaoMap
                  isListSelected={isListSelected}
                  keyword={keyword}
                  setIsMapSearch={setIsMapSearch}
                />
              )}
            </>
          )}
        </ModalInnerRightBox>
      </ModalWrapper>
      <ModalCloseArea
        handleModalClose={() => {
          handleModalClose({ modalName: 'isHospitalModal' });
          dataReset();
        }}
      />
    </ModalContainer>
  );
}
