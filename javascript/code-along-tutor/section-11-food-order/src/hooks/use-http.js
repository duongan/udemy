import { useCallback, useState } from 'react';

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState();

    const sendHttpRequest = useCallback(
        async (requestConfig = {}, handleResponsedData = () => {}) => {
            setIsLoading(true);

            const {
                url = '',
                method = 'GET',
                headers = null,
                body = null,
            } = requestConfig;
            const params = {};
            if (method) {
                params.method = method;
            }
            if (headers) {
                params.headers = headers;
            }
            if (body) {
                params.body = JSON.stringify(body);
            }
            try {
                const response = await fetch(url, params);
                if (!response.ok) {
                    setHttpError(new Error('Something went wrong!'));
                } else {
                    const data = await response.json();
                    handleResponsedData(data);
                }
            } catch (error) {
                setHttpError(error);
            }

            setIsLoading(false);
        },
        []
    );

    return {
        sendHttpRequest,
        isLoading,
        httpError,
    };
};

export default useHttp;
