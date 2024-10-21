import { CloseIcon } from '@/components/Modal/style';

import ModalContainer from '@/components/ModalContainer';
import {
  ImageWrapper,
  LowerWrapper,
  ModalBox,
  UpperWrapper,
} from '@/pages/SignUp/Department/Inputs/Document/Modal/style';

function Modal({ file, setModalState }) {
  return (
    <ModalContainer>
      <ModalBox>
        <UpperWrapper>
          <div>
            <p>{file.name}</p>
          </div>
          <CloseIcon
            onClick={() => {
              setModalState(false);
            }}
          />
        </UpperWrapper>
        <ImageWrapper>
          <img alt='img' src={URL.createObjectURL(file)} />
        </ImageWrapper>
        <LowerWrapper />
      </ModalBox>
    </ModalContainer>
  );
}

export default Modal;
