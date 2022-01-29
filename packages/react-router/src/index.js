import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as hooks from './hooks';

const reactRouter = ({
  registerHook,
  registerAction,
  createHook,
  getConfig,
}) => {
  registerHook(hooks);

  const RouterWrapper = (props) => {
    // Let customize the Router wrapper
    const { value: Router } = createHook.waterfall(
      hooks.REACT_ROUTER_COMPONENT,
      {
        component: getConfig('reactRouter.component', BrowserRouter),
      },
    );

    return <Router.component {...props} />;
  };

  registerAction({
    hook: '$REACT_ROOT_WRAPPER',
    handler: { component: RouterWrapper },
  });
};

export { reactRouter };
export default reactRouter;
