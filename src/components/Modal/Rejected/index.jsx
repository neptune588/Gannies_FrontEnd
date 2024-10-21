import { CloseIcon, Image, ModalBox } from '@/components/Modal/style';

import ModalContainer from '@/components/ModalContainer';
import warn from '@/assets/images/warn.png';
import { useDispatch } from 'react-redux';
import { handleModal, initialState } from '@/store/modalState';
import useSelectorList from '@/hooks/useSelectorList';

function Rejected() {
  const dispatch = useDispatch();
  const { rejected } = useSelectorList();
  const closeModal = () => {
    dispatch(
      handleModal({
        field: 'rejected',
        value: initialState.rejected,
      })
    );
  };
  return (
    <ModalContainer>
      <ModalBox>
        <CloseIcon onClick={closeModal} />
        <Image src={warn} alt='warn' />
        <h4>회원가입 승인 거절</h4>
        <h6>다음과 같은 사유로 인해 정회원 승인이 보류되었습니다. </h6>
        <h6>사유:</h6>
        <h6>{rejected.reason}</h6>
        <p>자세한 사항은 관리자에게 문의해주세요.</p>
        {/* <span>메인 페이지와 마이페이지만 이용 가능합니다.</span> */}
      </ModalBox>
    </ModalContainer>
  );
}

export default Rejected;
