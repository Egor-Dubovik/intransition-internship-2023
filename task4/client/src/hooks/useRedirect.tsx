import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRedirect = (isSuccess: boolean, path: string): void => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      navigate(path);
    }
  }, [isSuccess, path, navigate]);
};

export default useRedirect;
