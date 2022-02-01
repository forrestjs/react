import React, { useContext } from 'react';

export const ForrestJSContext = React.createContext();

export const useForrestJS = (path, defaultValue) =>
  useContext(ForrestJSContext);

export const useGetConfig = (path, defaultValue) => {
  const { getConfig } = useContext(ForrestJSContext);
  return getConfig(path, defaultValue);
};

export const useGetContext = (path, defaultValue) => {
  const { getContext } = useContext(ForrestJSContext);
  return getContext(path, defaultValue);
};
