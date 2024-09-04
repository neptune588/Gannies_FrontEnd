import styled from 'styled-components';

const CloseArea = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export default function ModalCloseArea({ handleModalClose = null }) {
  return <CloseArea onClick={handleModalClose || null} />;
}
