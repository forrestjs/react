import axios from 'axios';
import {
  useState,
  // useContext
} from 'react';
// import { AxiosContext } from './AxiosProvider';

export const GET_METHODS = ['GET'];
export const SERVER_URL = process.env.REACT_APP_SERVER_URL || '';
export const DEFAULT_OPTIONS = { withCredentials: true };

const ABSOLUTE_URL_REGEXP = /^https?:\/\//i;
export const isAbsoluteUrl = (url) => ABSOLUTE_URL_REGEXP.test(url);

export const composeUrl = (...tokens) => {
  const r1 = tokens.join('/').replace(/([^:])(\/\/+)/g, '$1/');
  return r1.substr(0, 2) === '//' ? r1.substr(1) : r1;
};

export const useAxios = (defaultOptions = DEFAULT_OPTIONS) => {
  // const contextOptions = useContext(AxiosContext);
  // console.log('****', contextOptions);

  const [called, setCalled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const createMethod =
    (method) =>
    (url, data = {}, { keepData, ...options } = {}) => {
      const handler = axios[method];
      if (!handler) {
        const error = new Error(`Method "${method}" does not exist.`);
        setError(error);
        return Promise.reject(error);
      }

      const _url = isAbsoluteUrl(url) ? url : composeUrl(SERVER_URL, url);
      const _options = {
        ...options,
        ...defaultOptions,
      };

      // Update the internal state before the request is made
      setCalled(true);
      setError(null);
      !keepData && setData(null);
      setLoading(true);

      const promise = GET_METHODS.includes(method.toUpperCase())
        ? handler(_url, _options)
        : handler(_url, data, _options);

      // Handles the AXIOS promise to update the internal state
      promise.then((response) => setData(response.data));
      promise.catch((err) => setError(err));
      promise.finally(() => setLoading(false));

      // Forwars the axios promise
      return promise;
    };

  return {
    called,
    loading,
    data,
    error,
    get: createMethod('get'),
    post: createMethod('post'),
    delete: createMethod('delete'),
  };
};
