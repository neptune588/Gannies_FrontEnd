import { createSocket, extendSession, monitorSession } from '@/api/socketAPI';
import { handleModal } from '@/store/modalState';
import { setSocket } from '@/utils/socket';
import { useDispatch } from 'react-redux';

export const useSocket = () => {
  const dispatch = useDispatch();

  const startSessionMonitoring = async () => {
    try {
      await monitorSession();
    } catch (error) {
      alert('세션 모니터링 중 오류 발생');
      throw error;
    }
  };

  const connectSocket = async (attempts) => {
    const newSocket = createSocket();
    setSocket(newSocket);

    return new Promise((resolve, reject) => {
      newSocket.on('connect', () => {
        setSocket(newSocket);
        startSessionMonitoring();
        resolve(newSocket);
      });

      newSocket.on('connect_error', () => {
        if (attempts > 1) {
          attempts = attempts - 1;
          setTimeout(() => {
            connectSocket(attempts - 1)
              .then(resolve)
              .catch(reject);
          }, 1000);
        } else {
          reject(new Error('소켓 연결 실패: 최대 재시도 횟수 초과'));
        }
      });
    });
  };

  const handleSessionExpiryWarning = () => {
    dispatch(
      handleModal({
        field: 'extendSession',
        value: { status: true },
      })
    );
  };

  const handleSessionExtend = async () => {
    try {
      await extendSession();
      dispatch(
        handleModal({
          field: 'extendSession',
          value: { status: false },
        })
      );
    } catch (error) {
      alert('세션 연장 중 에러 발생');
    }
  };

  return {
    connectSocket,
    handleSessionExpiryWarning,
    handleSessionExtend,
  };
};
