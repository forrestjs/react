import React from 'react';
import ReactDOM from 'react-dom';
import * as hooks from './hooks';
import reportWebVitals from './reportWebVitals';
import { defaultComponent } from './default-component';
import { GetContext } from './use-get-context';
import { GetConfig } from './use-get-config';
export { useGetContext } from './use-get-context';
export { useGetConfig } from './use-get-config';

const reactRoot = ({
  registerAction,
  createHook,
  getConfig,
  getContext,
  setContext,
  registerHook,
}) => {
  registerHook(hooks);

  const HooksWrapper = ({ children }) => (
    <GetConfig.Provider value={getConfig}>
      <GetContext.Provider value={getContext}>{children}</GetContext.Provider>
    </GetConfig.Provider>
  );

  registerAction({
    hook: '$INIT_SERVICE',
    handler: () => {
      const { value: rootEl } = createHook.waterfall(
        hooks.REACT_ROOT_COMPONENT,
        getConfig('reactRoot.component', { component: defaultComponent }),
      );

      const wrappers = createHook
        .sync(hooks.REACT_ROOT_WRAPPER)
        .map(($) => $[0].component);
      wrappers.reverse();

      const reactRoot = [...wrappers, HooksWrapper].reduce(
        (children, el) => React.createElement(el, { children }),
        React.createElement(rootEl.component),
      );
      setContext('reactRoot.component', reactRoot);
    },
  });

  registerAction({
    hook: '$START_SERVICE',
    handler: () => {
      const rootId = getConfig('reactRoot.target', 'root');
      const reactRoot = getContext('reactRoot.component');
      ReactDOM.render(reactRoot, document.getElementById(rootId));

      // If you want to start measuring performance in your app, pass a function
      // to log results (for example: reportWebVitals(console.log))
      // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
      if (getConfig('reactRoot.webvitals.isActive', false)) {
        reportWebVitals();
      }
    },
  });
};

export { reactRoot };
export default reactRoot;
