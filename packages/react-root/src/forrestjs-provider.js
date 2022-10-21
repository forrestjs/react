import React, { useContext } from 'react';

export const ForrestJSContext = React.createContext();

/**
 * @returns {any} ForrestJS Context
 */
export const useForrestJS = () => useContext(ForrestJSContext);

/**
 * @param {String} path
 * @param {any} [defaultValue]
 * @returns {any}
 */
export const useGetConfig = (path, defaultValue) => {
  const { getConfig } = useContext(ForrestJSContext);
  return getConfig(path, defaultValue);
};

/**
 * @param {String} path
 * @param {any} [defaultValue]
 * @returns {any}
 */
export const useGetContext = (path, defaultValue) => {
  const { getContext } = useContext(ForrestJSContext);
  return getContext(path, defaultValue);
};
