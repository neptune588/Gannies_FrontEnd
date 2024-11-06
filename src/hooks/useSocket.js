import { io } from 'socket.io-client';

export const useSocket = () => {
  const startSessionMonitoring = async () => {
    try {
      const monitorResponse = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}session/monitor`,
        {
          method: 'POST',
          credentials: 'include',
        }
      );

      if (!monitorResponse.ok) throw new Error('세션 모니터링 시작 실패');
      console.log('세션 모니터링 시작됨.');
    } catch (error) {
      console.error('세션 모니터링 중 오류 발생:', error);
    }
  };

  const connectSocket = async (attempts) => {
    console.log(attempts);
    const newSocket = io(`${import.meta.env.VITE_API_BASE_URL}`, {
      withCredentials: true,
      transports: ['websocket'],
    });

    return new Promise((resolve, reject) => {
      newSocket.on('connect', () => {
        console.log('소켓이 연결되었습니다. 세션 모니터링 시작합니다.');
        startSessionMonitoring();
        resolve(newSocket);
      });

      newSocket.on('connect_error', (error) => {
        console.error('소켓 연결 에러:', error);
        if (attempts > 1) {
          console.log(`소켓 연결 재시도 중... 남은 시도 횟수: ${attempts - 1}`);
          attempts = attempts - 1;
          setTimeout(() => {
            connectSocket(attempts - 1)
              .then(resolve)
              .catch(reject);
          }, 1000); // 1초 후 재시도
        } else {
          reject(new Error('소켓 연결 실패: 최대 재시도 횟수 초과'));
        }
      });
    });
  };

  return { startSessionMonitoring, connectSocket };
};
