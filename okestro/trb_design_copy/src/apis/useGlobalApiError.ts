import { useCallback } from 'react';
import { AxiosError } from 'axios';

/*
  todo: 공통적으로 설정된 에러 핸들링 - 백엔드 Error Handler 비교해서 사용 필요
  - 기획적으로 정의된 에러에 대한 Action이 있으면 추가 필요
 */
export const useGlobalApiError = () => {
  const handleError = useCallback((axiosError: AxiosError) => {
    const errorResponse = axiosError.response;
    const statusCode = errorResponse?.status;
    switch (statusCode) {
      default:
        console.error('Current API is Failed. Status Code :', statusCode);
    }
  }, []);

  return { handleError };
};
