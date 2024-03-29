import React from 'react';
import * as targets from './targets';
import { MUIWrapper } from './MuiWrapper';
export { useMUITheme } from './use-mui-theme';

/**
 * @param {ForrestJSContext} ctx
 * @returns {Array.<ForrestJSExtension>}
 */
const reactMUI = ({
  registerTargets,
  registerAction,
  createExtension,
  getConfig,
}) => {
  registerTargets(targets);

  const AppWrapper = (props) => {
    // Retrieve the default theme:
    const defaultThemeSource = createExtension.waterfall(
      targets.MUI_SET_THEME,
      getConfig('reactMui.theme', {}),
    );

    // Retrieve additional themes:
    const themes = [
      ...createExtension.sync(targets.MUI_ADD_THEME).map(($) => $[0]),
      { ...defaultThemeSource.value, name: 'default' },
    ].reduce((acc, curr) => ({ ...acc, [curr.name]: curr }), {});

    // Retrieve the initial theme name:
    const defaultThemeName = createExtension.waterfall(
      targets.MUI_USE_THEME,
      getConfig('reactMui.use', 'default'),
    );

    return (
      <MUIWrapper
        {...props}
        initialThemes={themes}
        defaultTheme={defaultThemeName.value}
      />
    );
  };

  registerAction({
    target: '$REACT_ROOT_WRAPPER',
    handler: { component: AppWrapper },
  });
};

export { reactMUI };
export default reactMUI;
