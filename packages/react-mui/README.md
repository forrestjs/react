# @ForrestJS/react-mui

Provides your App with the [MUI](https://mui.com) theme context, allows you to easily provide a one or more custom themes, and an easy way to switch between them using the React hooks interface.

[![Edit react-mui](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-mui-8rx74?fontsize=14&hidenavigation=1&theme=dark)

## Override the Default Theme

The following example shows how to pack a MUI theme as a ForrestJS Feature. But the real deal is to follow [MUI's theming guidelines](https://mui.com/customization/theming/) to customize every single detail of the library.

```js
// MUI provides you with tons of utilities to customize your theme:
import { teal } from '@mui/material/colors';

// Package the default theme as a ForrestJS single hook Feature:
const muiTheme = [
  '$MUI_SET_THEME',
  (theme) => ({
    ...theme,
    palette: { primary: teal },
    typography: { h1: { fontSize: 20 } },
  }),
];

// Build you ForrestJS App Manifest:
runHookApp({
  services: [reactRoot, reactMUI],
  features: [muiTheme, App],
});
```

## Add Multiple Themes

You can add multiple themes and switch between them at runtime:

```js
import { teal, orange } from '@mui/material/colors';

const themeOne = [
  '$MUI_ADD_THEME',
  (theme = {
    name: 'teal',
  }),
];
```
