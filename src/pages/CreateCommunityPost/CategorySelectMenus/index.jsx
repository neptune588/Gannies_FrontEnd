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
  selectedOption,
  setSelectedOption,
  setHospitalName,
  handleSelectedOption,
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
          {selectedOption}
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
                  setSelectedOption(option.content);
                  setIsOpen(false);

                  handleSelectedOption(option.path);
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
