import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import bottomArrow from '@/assets/icons/arrows/chevron_down.svg';
import { defaultBorderBoxStyle } from '@/styles/commonStyle/box';
import { xsmall_400 } from '@/styles/commonStyle/localTextStyle';
import uuid from 'react-uuid';
import upArrow from '@/assets/icons/arrows/chevron_up.svg';

const SelectContainer = styled.div`
  ${defaultBorderBoxStyle}
  ${xsmall_400}
  width: ${({ $pageType }) => {
    if ($pageType === 'search' || $pageType === 'admin') {
      return '155px';
    } else {
      return '95px';
    }
  }};
  height: 35px;
  position: relative;
  background-color: white;
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
  width: ${({ $pageType }) => {
    if ($pageType === 'search' || $pageType === 'admin') {
      return '155px';
    } else {
      return '95px';
    }
  }};
  background-color: white;
  z-index: 1000;
  ${defaultBorderBoxStyle}
  padding: 3px 4px;

  button {
    color: ${(props) => props.theme.colors.gray[80]};
    cursor: pointer;
    margin: 1px 0px;
    ${xsmall_400};
    height: 28px;
    width: ${({ $pageType }) => {
      if ($pageType === 'search' || $pageType === 'admin') {
        return '100%';
      } else {
        return '86px';
      }
    }};
    border-radius: 4px;
    text-align: ${({ $pageType }) => {
      return ($pageType === 'search' || $pageType === 'admin') && 'left';
    }};
    padding: ${({ $pageType }) => {
      if ($pageType === 'search') {
        return '0 20px';
      } else if ($pageType === 'admin') {
        return '0 10px';
      }
    }};
    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export default function AlignSelectMenu({
  optionList,
  selectedOption,
  isSearch,
  pageType,
  searchedListLength,
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
    <SelectContainer ref={selectRef} $pageType={pageType}>
      <button onClick={toggleDropdown}>
        <p>
          {`${selectedOption} `}
          {(searchedListLength || searchedListLength === 0) && (
            <span>{`(${searchedListLength})`}</span>
          )}
        </p>
        <img src={isOpen ? upArrow : bottomArrow} alt='select-arrow' />
      </button>
      {isOpen && (
        <Dropdown $pageType={pageType}>
          {optionList.map((option) => (
            <button
              key={uuid()}
              onClick={() => {
                if (isSearch) {
                  setSelectedOption({ label: option.label, path: option.path });
                } else {
                  setSelectedOption(option.label);
                  handleSelectedOption(option.query);
                }
                setIsOpen(false);
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
