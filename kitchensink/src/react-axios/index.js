import React from 'react';
import * as hooks from './hooks';
import { AxiosProvider } from './AxiosProvider';

export { useAxios } from './use-axios';

const reactRouter = ({ registerHook, registerAction, getConfig }) => {
  registerHook(hooks);

  registerAction({
    hook: '$REACT_ROOT_WRAPPER',
    handler: (App) => {
      const baseUrl = getConfig(
        'axios.baseUrl',
        process.env.REACT_APP_AXIOS_BASE_URL || '://',
      );

      // TODO: Hook to add headers
      // TODO: Hook to setup options

      const value = { baseUrl };
      return <AxiosProvider value={value} children={App} />;
    },
  });
};

export { reactRouter };
export default reactRouter;
