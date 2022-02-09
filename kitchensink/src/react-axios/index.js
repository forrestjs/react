import React from 'react';
import { AxiosProvider } from './AxiosProvider';

export { useAxios } from './use-axios';

const reactRouter = ({ getConfig }) => {
  const AppWrapper = (props) => {
    const baseUrl = getConfig(
      'axios.baseUrl',
      process.env.REACT_APP_AXIOS_BASE_URL || '://',
    );

    // TODO: Hook to add headers
    // TODO: Hook to setup options

    const value = { baseUrl };
    return <AxiosProvider {...props} value={value} />;
  };

  return {
    target: '$REACT_ROOT_WRAPPER',
    handler: { component: AppWrapper },
  };
};

export { reactRouter };
export default reactRouter;
