import { CloseIcon, Image, ModalBox } from '@/components/Modal/style';

import ModalContainer from '@/components/ModalContainer';
import warn from '@/assets/images/warn.png';
import { useDispatch } from 'react-redux';
import { handleModal, initialState } from '@/store/modalState';
import useSelectorList from '@/hooks/useSelectorList';
import { formatDateToSuspend } from '@/utils/dateFormatting';

function IsSuspended() {
  const dispatch = useDispatch();
  const { isSuspended } = useSelectorList();
  const closeModal = () => {
    dispatch(
      handleModal({ field: 'isSuspended', value: initialState.isSuspended })
    );
  };
  return (
    <ModalContainer>
      <ModalBox>
        <CloseIcon onClick={closeModal} />
        <Image src={warn} alt='warn' />
        <h4>계정 정지 안내</h4>
        <h6>현재 귀하의 계정은 {isSuspended.duration} 동안 정지되었습니다.</h6>
        <h6>정지 사유: {isSuspended.reason}</h6>
        <h6>정지 해제 예정일: {formatDateToSuspend(isSuspended.endDate)}</h6>
        <p>자세한 사항은 관리자에게 문의해 주시기 바랍니다.</p>
        <span>현재 메인 페이지와 마이 페이지만 이용 가능합니다.</span>
      </ModalBox>
    </ModalContainer>
  );
}

export default IsSuspended;
