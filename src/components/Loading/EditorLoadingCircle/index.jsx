import styled from 'styled-components';

import loading from '@/assets/images/editor_loading_circle.gif';

import { centerAlignStyle } from '@/styles/commonStyle/etc';

const Container = styled.div`
  ${centerAlignStyle}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  opacity: 0.6;
  user-select: none;
  z-index: 10;
`;

export default function EditorLoadingCircle() {
  return (
    <Container>
      <img src={loading} alt={'loading'} />
    </Container>
  );
}
