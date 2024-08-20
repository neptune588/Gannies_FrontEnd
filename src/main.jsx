import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import './index.css'
import { Provider } from 'react-redux';
import store from '@/store/store';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
    queries: {
      staleTime: 1000 * 60,   // 데이터가 신선한 상태로 간주되는 시간 (ms)
      cacheTime: 1000 * 60 * 5,  // 데이터가 캐시에 유지되는 시간 (ms)
      retry: 1,  // 실패 시 1회 재시도
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </Provider>
)