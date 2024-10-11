import styled from 'styled-components';

import loading from '@/assets/images/editor_loading_circle.gif';

import { centerAlignStyle } from '@/styles/commonStyle/etc';

const Container = styled.div`
  ${centerAlignStyle}
  width: 100%;
  height: 490px;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  z-index: 10;
`;

export default function EditorLoadingCircle() {
  return (
    <Container>
      <img src={loading} alt={'loading'} />
    </Container>
  );
}
