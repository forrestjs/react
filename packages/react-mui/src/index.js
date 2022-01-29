import React from 'react';
import * as hooks from './hooks';
import { MUIWrapper } from './MuiWrapper';
export { useMUITheme } from './use-mui-theme';

const reactMUI = ({ registerHook, registerAction, createHook, getConfig }) => {
  registerHook(hooks);

  const AppWrapper = (props) => {
    // Retrieve the default theme:
    const defaultThemeSource = createHook.waterfall(
      hooks.MUI_SET_THEME,
      getConfig('reactMui.theme', {}),
    );

    // Retrieve additional themes:
    const themes = [
      ...createHook.sync(hooks.MUI_ADD_THEME).map(($) => $[0]),
      { ...defaultThemeSource.value, name: 'default' },
    ].reduce((acc, curr) => ({ ...acc, [curr.name]: curr }), {});

    // Retrieve the initial theme name:
    const defaultThemeName = createHook.waterfall(
      hooks.MUI_USE_THEME,
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
    hook: '$REACT_ROOT_WRAPPER',
    handler: { component: AppWrapper },
  });
};

export { reactMUI };
export default reactMUI;
