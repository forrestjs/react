# @ForrestJS/react-mui

Provides your App with the [MUI](https://mui.com) theme context, allows you to easily provide a one or more custom themes, and an easy way to switch between them using the React hooks interface.

[![Edit react-mui](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-mui-8rx74?fontsize=14&hidenavigation=1&theme=dark)

## Override the Default Theme

The following example shows how to pack a MUI theme as a ForrestJS Feature. But the real deal is to follow [MUI's theming guidelines](https://mui.com/customization/theming/) to customize every single detail of the library.

### By Manifest

```js
import { teal } from '@mui/material/colors';

forrestjs.run({
  settings: {
    reactMui: {
      theme: {
        palette: { primary: teal },
        typography: { h1: { fontSize: 20 } },
      },
    },
  },
  services: [reactRoot, reactMUI],
  features: [myApp],
});
```

### By Feature

Of course, you can pack your custom theme as a ForrestJS feature. Further on, we'll see how to create a Feature that packs multiple themes!

```js
// MUI provides you with tons of utilities to customize your theme:
import { teal } from '@mui/material/colors';

// Package the default theme as a ForrestJS single hook Feature:
const muiTheme = {
  target: '$MUI_SET_THEME',
  handler: (defaultTheme) => ({
    palette: { primary: teal },
    typography: { h1: { fontSize: 20 } },
  }),
};

// Build you ForrestJS App Manifest:
forrestjs.run({
  services: [reactRoot, reactMUI],
  features: [muiTheme, myApp],
});
```

## Add Multiple Themes

You can add multiple themes and switch between them at runtime:

```js
import { teal, orange } from '@mui/material/colors';

const themeTeal = {
  target: '$MUI_ADD_THEME',
  handler: {
    name: 'teal',
    palette: { primary: teal },
  },
};

const themeOrange = {
  target: '$MUI_ADD_THEME',
  handler: {
    name: 'orange',
    palette: { primary: orange },
  },
};

forrestjs.run({
  services: [reactRoot, reactMUI],
  features: [myApp, themeTeal, themeOrange],
});
```

## Selecting the Starting Theme

The App will render the `default` theme by default (smart, uh?).

But in case you have multiple themes, you can select the starting theme in the manifest's settings or in a hook.

### By Manifest

```js
forrestjs.run({
  settings: {
    reactMui: {
      use: 'myThemeName',
    },
  },
});
```

### By Feature

```js
const startingTheme = {
  target: '$MUI_USE_THEME',
  handler: 'myThemeName',
};

forrestjs.run({
  features: [..., startingTheme],
});
```
