import React from 'react';
import ReactDOM from 'react-dom';
import * as targets from './targets';
import { defaultComponent } from './default-component';
import { ForrestJSContext } from './forrestjs-provider';

export {
  useForrestJS,
  useGetContext,
  useGetConfig,
} from './forrestjs-provider';

/**
 * @param {ForrestJSContext} ctx
 * @returns {Array.<ForrestJSExtension>}
 */
const reactRoot = ({
  registerAction,
  createExtension,
  getConfig,
  getContext,
  setContext,
  registerTargets,
}) => {
  /**
   * This component renders a list of wrappers definition {component, props?} recursively
   * ending in a NULL component rendering.
   *
   * @param {} param0
   * @returns
   */
  const Root = ({ items }) => {
    // recursion base:
    if (!items.length) return null;

    // render the outermost wrapper recursively:
    const [curr, ...others] = items;
    return React.createElement(curr.component, {
      ...(curr.props || {}),
      children: <Root items={others} />,
    });
  };

  registerTargets(targets);

  registerAction({
    target: '$INIT_SERVICE',
    handler: () => {
      // Get the root definition (component + props)
      const { value: root } = createExtension.waterfall(
        targets.REACT_ROOT_COMPONENT,
        {
          component: getConfig('reactRoot.component', defaultComponent),
          props: getConfig('reactRoot.props', {}),
        },
      );

      // Get the wrappers definitions (component + props)
      const wrappers = createExtension
        .sync(targets.REACT_ROOT_WRAPPER)
        .map(($) => $[0]);

      setContext('reactRoot', { root: root, wrappers });
    },
  });

  registerAction({
    target: '$START_SERVICE',
    handler: (forrestJSContext) => {
      const rootId = getConfig('reactRoot.target', 'root');
      const root = getContext('reactRoot.root');
      const wrappers = getContext('reactRoot.wrappers');

      // Instrument the whole App with ForrestJS APIs
      const Hooks = (props) => (
        <ForrestJSContext.Provider {...props} value={forrestJSContext} />
      );

      // Render the application composition to the DOM:
      const items = [{ component: Hooks }, ...wrappers, root];
      ReactDOM.render(<Root items={items} />, document.getElementById(rootId));
    },
  });
};

export { reactRoot };
export default reactRoot;
