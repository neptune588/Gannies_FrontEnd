import styled from 'styled-components';

import bottomArrow from '@/assets/icons/arrows/chevron_down.svg';

import { defaultBorderBoxStyle } from '@/styles/commonStyle/box';
import { centerAlignStyle } from '@/styles/commonStyle/etc';
import { xsmall_400 } from '@/styles/commonStyle/localTextStyle';

const SelectBox = styled.div`
  ${defaultBorderBoxStyle}
  ${centerAlignStyle}
  width: 95px;
  height: 35px;
  padding: 0 10px;
  ${xsmall_400}
  > div:first-child {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default function AlignSelectMenu() {
  return (
    <SelectBox>
      <div>
        <p>최신순</p>
        <img src={bottomArrow} alt='select-arrow' />
      </div>
    </SelectBox>
  );
}
