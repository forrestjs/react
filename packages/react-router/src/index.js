import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as targets from './targets';

/**
 * @param {ForrestJSContext} ctx
 * @returns {Array.<ForrestJSExtension>}
 */
const reactRouter = ({
  registerTargets,
  registerAction,
  createExtension,
  getConfig,
}) => {
  registerTargets(targets);

  const RouterWrapper = (props) => {
    // Let customize the Router wrapper
    const { value: Router } = createExtension.waterfall(
      targets.REACT_ROUTER_COMPONENT,
      {
        component: getConfig('reactRouter.component', BrowserRouter),
      },
    );

    return <Router.component {...props} />;
  };

  registerAction({
    target: '$REACT_ROOT_WRAPPER',
    handler: { component: RouterWrapper },
  });
};

export { reactRouter };
export default reactRouter;
