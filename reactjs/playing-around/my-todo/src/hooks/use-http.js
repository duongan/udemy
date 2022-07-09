import { useCallback, useReducer } from 'react';

const initialState = {
  isLoading: false,
  isLoaded: false,
};

const reducer = (state, action) => {
  if (action.type === 'START_LOADING') {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === 'FINISH_LOADING') {
    return {
      ...state,
      isLoading: false,
      isLoaded: true,
    };
  }
  return initialState;
};

const useHttp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
    dispatch({ type: 'START_LOADING' });
    fetch(url, options)
      .then(
        (response) => {
          dispatch({ type: 'FINISH_LOADING' });
          return response.json();
        },
        () => {
          dispatch({ type: 'FINISH_LOADING' });
        }
      )
      .then((data) => {
        applyData(data);
      })
      .catch((error) => {
        dispatch({ type: 'FINISH_LOADING' });
        console.log('error', error);
      });
  }, []);

  return {
    isLoading: state.isLoading,
    isLoaded: state.isLoaded,
    sendRequest,
  };
};

export default useHttp;
