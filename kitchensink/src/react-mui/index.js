import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as hooks from './hooks';

const reactMUI = ({ registerHook, registerAction, createHook, getConfig }) => {
  registerHook(hooks);

  registerAction({
    hook: '$REACT_ROOT_WRAPPER',
    handler: (App) => {
      const themeConfig = getConfig('react-mui.theme', {});
      const themeSource = createHook.waterfall(hooks.MUI_THEME, themeConfig);
      const theme = createTheme(themeSource.value);

      return <ThemeProvider theme={theme} children={App} />;
    },
  });
};

export { reactMUI };
export default reactMUI;