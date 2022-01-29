# @ForrestJS/react-root

- It renders the App's root component using the local ReactDOM library
- It facilitates the App's wrapping with stuff like ReactRouter or ApolloContext
- It provides hooks to access the App's `config` and `context`

## Basic Usage

First, we can create an `AppRoot.js` component that can access the App's configuration via React hooks:

```js
import { useGetConfig } from '@forrestjs/react-root';

const AppRoot = () => {
  const value = useGetConfig('welcome.message');
  return <div>{value}</div>;
};

export default AppRoot;
```

Now we can package our App using ForrestJS:

```js
import { runHookApp } from '@forrestjs/hooks';
import reactRoot, { getConfig } from '@forrestjs/react-root';
import AppRoot from './AppRoot';

// Your App should have one feature that implements the
// REACT_ROOT_COMPONENT hook to provide the... root component:
const rootEl = ['$REACT_ROOT_COMPONENT', { component: AppRoot }];

runHookApp({
  settings: {
    welcome: {
      message: 'Hello World',
    },
  },
  services: [reactRoot],
  features: [rootEl],
}).catch((err) => console.error(`Boot: ${err.message}`));
```

## CodeSandbox

<iframe src="https://codesandbox.io/embed/react-root-cqqlh?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-root"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

[![Edit kitchensink](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-root-cqqlh?fontsize=14&hidenavigation=1&theme=dark)
