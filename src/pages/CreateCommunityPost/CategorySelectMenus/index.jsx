import { useState } from 'react';
import uuid from 'react-uuid';

import bottomArrow from '@/assets/icons/arrows/chevron_down.svg';

import {
  Wrapper,
  SelectedBox,
  SelectOptionBox,
  SelectOption,
} from '@/pages/CreateCommunityPost/CategorySelectMenus/style';

export default function CategorySelectMenus({
  optionList,
  selectedBoardTitle,
  setSelectedBoardTitle,
  setHospitalName,
  handleBoardTypeChange,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <SelectedBox
        $isOpen={isOpen}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <p>*카테고리</p>
        <div>
          {selectedBoardTitle}
          <img src={bottomArrow} alt={'arrow'} />
        </div>
      </SelectedBox>
      {isOpen && (
        <SelectOptionBox>
          {optionList.map((option) => {
            return (
              <SelectOption
                key={uuid()}
                onClick={() => {
                  setSelectedBoardTitle(option.content);
                  setIsOpen(false);

                  handleBoardTypeChange(option.path);
                  setHospitalName('병원찾기');
                }}
              >
                {option.content}
              </SelectOption>
            );
          })}
        </SelectOptionBox>
      )}
    </Wrapper>
  );
}
