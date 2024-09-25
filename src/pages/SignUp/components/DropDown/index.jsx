import { useState } from 'react';
import styled from 'styled-components';
import bottomArrow from '@/assets/icons/arrows/chevron_down.svg';
import upArrow from '@/assets/icons/arrows/chevron_up.svg';
import { defaultBorderBoxStyle } from '@/styles/commonStyle/box';
import { centerAlignStyle } from '@/styles/commonStyle/etc';
import { small_400 } from '@/styles/commonStyle/localTextStyle';
import uuid from 'react-uuid';

const SelectContainer = styled.div`
  ${defaultBorderBoxStyle}
  width: 108px;
  height: 48px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.gray[30]};
  margin-top: 10px;

  > button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 0 16px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black};
    ${small_400};

    div {
      border-left: 1px solid ${({ theme }) => theme.colors.gray[30]};
      height: 100%;
    }
    img {
      width: 18px;
      height: 18px;
    }
  }
`;

const DropdownBox = styled.div`
  position: absolute;
  top: 50px;
  left: -1px;
  width: 107px;
  background-color: white;
  z-index: 1000;
  ${defaultBorderBoxStyle}
  padding: 3px 4px;

  button {
    color: ${(props) => props.theme.colors.black};
    ${centerAlignStyle}
    cursor: pointer;
    margin: 1px 0px;
    ${small_400};
    height: 35px;
    width: 100%;
    border-radius: 4px;

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export default function Dropdown({
  optionList,
  selectedOption,
  setSelectedOption,
  disabled,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <SelectContainer>
      <button onClick={toggleDropdown} disabled={disabled}>
        <p>{selectedOption}</p>
        <div />
        <img src={isOpen ? upArrow : bottomArrow} alt='select-arrow' />
      </button>
      {isOpen && (
        <DropdownBox>
          {optionList.map((option) => (
            <button key={uuid()} onClick={() => handleSelectedOption(option)}>
              {option}
            </button>
          ))}
        </DropdownBox>
      )}
    </SelectContainer>
  );
}
