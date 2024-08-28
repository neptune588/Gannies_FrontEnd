import styled from 'styled-components';

import bottomArrow from '@/assets/icons/arrows/chevron_down.svg';

import { defaultBorderBoxStyle } from '@/styles/commonStyle/box';
import { centerAlignStyle } from '@/styles/commonStyle/etc';

const SelectBox = styled.div`
  ${defaultBorderBoxStyle}
  ${centerAlignStyle}
  width: 95px;
  height: 35px;
  padding: 0 10px;
  font-size: ${({ theme: { typo } }) => {
    return typo.size.xs;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.regular;
  }};
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
