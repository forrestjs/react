import React from 'react';
import * as hooks from './hooks';
import { MUIWrapper } from './MuiWrapper';
export { useMUITheme } from './use-mui-theme';

const reactMUI = ({ registerHook, registerAction, createHook, getConfig }) => {
  registerHook(hooks);

  registerAction({
    hook: '$REACT_ROOT_WRAPPER',
    handler: (App) => {
      // Retrieve the default theme:
      const defaultThemeSource = createHook.waterfall(
        hooks.MUI_SET_THEME,
        getConfig('react-mui.theme', {}),
      );

      // Retrieve additional themes:
      const themes = [
        ...createHook.sync(hooks.MUI_ADD_THEME).map(($) => $[0]),
        { ...defaultThemeSource.value, name: 'default' },
      ].reduce((acc, curr) => ({ ...acc, [curr.name]: curr }), {});

      // Retrieve the initial theme name:
      const defaultThemeName = createHook.waterfall(
        hooks.MUI_USE_THEME,
        'default',
      );

      return (
        <MUIWrapper
          app={App}
          initialThemes={themes}
          defaultTheme={defaultThemeName.value}
        />
      );
    },
  });
};

export { reactMUI };
export default reactMUI;
