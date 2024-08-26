import searchIcon from '@/assets/icons/search/search_black.svg';

import {
  ModalContainer,
  ModalWrapper,
  ModalInnerLeftBox,
  SearchInputArea,
  SearchListBox,
  SearchList,
  HospitalName,
  HospitalLocationInfo,
  HospitalContact,
  ModalInnerRightBox,
  ModalCloseArea,
} from '@/pages/CreateCommunityPost/HospitalSearchModal/style';

export default function HospitalSearchModal() {
  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalInnerLeftBox>
          <h2>병원찾기</h2>
          <SearchInputArea>
            <input placeholder='병원을 입력하세요.' maxLength={35} />
            <img src={searchIcon} alt='search-icon' />
          </SearchInputArea>
          <SearchListBox>
            <SearchList>
              <HospitalName>강남세브란스 병원</HospitalName>
              <HospitalLocationInfo>
                <p>서울 강남구 언주로 211 / 도곡동 146-92</p>
                <p>06273</p>
              </HospitalLocationInfo>
              <HospitalContact>1599-6114</HospitalContact>
            </SearchList>
          </SearchListBox>
        </ModalInnerLeftBox>
        <ModalInnerRightBox></ModalInnerRightBox>
      </ModalWrapper>
      <ModalCloseArea />
    </ModalContainer>
  );
}
