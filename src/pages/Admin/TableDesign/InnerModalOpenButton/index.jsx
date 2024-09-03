import styled from 'styled-components';

import arrow from '@/assets/icons/arrows/chevron_down.svg';

const ButtonBox = styled.button`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  color: ${({ $currentActiveTab, $currentValue, theme: { colors } }) => {
    if ($currentActiveTab === '신고내역') {
      if ($currentValue === '처리 중') {
        return colors.gray['90'];
      } else if ($currentValue === '처리완료') {
        return colors.gray['50'];
      } else {
        return colors.negative;
      }
    } else if ($currentActiveTab === '회원관리') {
      if ($currentValue === '해당없음') {
        return colors.gray['50'];
      } else if ($currentValue === '정지') {
        return colors.primary;
      } else {
        return colors.negative;
      }
    }
  }};
  > img {
    width: 18px;
    height: 18px;
    rotate: ${({ $modalState }) => {
      return $modalState ? '180deg' : '0deg';
    }};
    margin-left: 5px;
  }
`;

export default function InnerModalOpenButton({
  currentActiveTab,
  currentValue,
  handleInnerModalToggle = null,
  innerModalState,
}) {
  return (
    <ButtonBox
      onClick={handleInnerModalToggle || undefined}
      $currentActiveTab={currentActiveTab}
      $currentValue={currentValue}
      $modalState={innerModalState}
    >
      {currentValue}
      <img src={arrow} alt='arrow' />
    </ButtonBox>
  );
}
