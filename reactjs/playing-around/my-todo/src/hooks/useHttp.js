import { useCallback, useState } from 'react';

const useHttp = () => {
  // console.log('useHttp Running!!!');
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback((requestConfig, applyData) => {
    const { url, method, headers, data } = requestConfig;
    const options = {
      method: method || 'GET',
      headers: headers || {
        'Content-Type': 'application/json',
      },
    };
    if (method !== 'GET') {
      options.body = JSON.stringify(data);
    }
    setIsLoading(true);
    fetch(url, options)
      .then(
        (response) => {
          setIsLoading(false);
          return response.json();
        },
        () => {
          setIsLoading(false);
        }
      )
      .then((data) => {
        applyData(data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  return {
    loading: isLoading,
    sendRequest,
  };
};

export default useHttp;
