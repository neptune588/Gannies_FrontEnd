import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import bottomArrow from '@/assets/icons/arrows/chevron_down.svg';
import { defaultBorderBoxStyle } from '@/styles/commonStyle/box';
import { centerAlignStyle } from '@/styles/commonStyle/etc';
import { xsmall_400 } from '@/styles/commonStyle/localTextStyle';
import uuid from 'react-uuid';
import upArrow from '@/assets/icons/arrows/chevron_up.svg';

const SelectContainer = styled.div`
  ${defaultBorderBoxStyle}
  ${centerAlignStyle}
  ${xsmall_400}
  width: 95px;
  height: 35px;
  position: relative;
  > button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.gray[80]};
    ${xsmall_400};

    img {
      width: 18px;
      height: 18px;
    }
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 37px;
  left: -1px;
  width: 95px;
  background-color: white;
  z-index: 1000;
  ${defaultBorderBoxStyle}
  padding: 3px 4px;

  button {
    color: ${(props) => props.theme.colors.gray[80]};
    ${centerAlignStyle}
    cursor: pointer;
    margin: 1px 0px;
    ${xsmall_400};
    height: 28px;
    width: 86px;
    border-radius: 4px;

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export default function AlignSelectMenu({
  optionList,
  selectedOption,
  setSelectedOption,
  handleSelectedOption,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleClickOutside = (e) => {
    if (selectRef.current && !selectRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('mousedown', handleClickOutside);
    } else {
      window.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <SelectContainer ref={selectRef}>
      <button onClick={toggleDropdown}>
        <p>{selectedOption}</p>
        <img src={isOpen ? upArrow : bottomArrow} alt='select-arrow' />
      </button>
      {isOpen && (
        <Dropdown>
          {optionList.map((option) => (
            <button
              key={uuid()}
              onClick={() => {
                setSelectedOption(option.label);
                setIsOpen(false);

                handleSelectedOption(option.query);
              }}
            >
              {option.label}
            </button>
          ))}
        </Dropdown>
      )}
    </SelectContainer>
  );
}
