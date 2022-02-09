# @ForrestJS/react-router

Provides your App with the famous declarative routing library [react-router](https://reactrouter.com/).

[![Edit react-router](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-router-64sw4?fontsize=14&hidenavigation=1&theme=dark)

## Add the Router Context

Providing your App with a `react-router` Context it's as easy as to list the service into your ForrestJS manifest:

```js
// Import ForrestJS Services:
import reactRoot from "@forrestjs/react-root";
import reactRouter from "@forrestjs/react-router";

// Run the ForrestJS App:
forrestjs.run({
  ...
  services: [reactRoot, reactRouter]
})
```

> The order of the services really doesn't matter.

## Add Routes

Inside your `App.js` you add routes by following the [official documentation](https://reactrouter.com/docs/en/v6/examples/basic).

> ForrestJS has absolutely nothing to do with how you build your components!

```js
import { Routes, Route } from 'react-router-dom';

// Import my custom routes components:
import { Home } from './Home';
import { Page } from './Page';

// Declare my routes v6 style:
export const App = () => (
  <Routes>
    <Route path="/" element={<Home />} exact />
    <Route path="/page/:id" element={<Page />} />
  </Routes>
);
```

## Set the Browser Component via Configuration

`react-root` offers different navigation styles based on the type of router that you use:

- BrowserRouter
- HashRouter
- MemoryRouter

By default the `BrowserRouter` is selected, but you can change this using the ForrestJS manifest configuration:

```js
import { HashBrowser } from 'react-router-dom';

forrestjs.run({
  config: {
    reactRouter: {
      component: HashBrowser,
    },
  },
});
```

[![Edit react-router-hash-config](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-router-hash-config-qmn3i?fontsize=14&hidenavigation=1&theme=dark)

## Set the Browser Component in a Feature

You can also override the default Router **AND** any config defined one by implementing the `$REACT_ROUTER_COMPONENT` hook:

```js
// Load a custom ReactRouter component and set it up
// as a ForrestJS single hook Feature:
import { HashRouter } from "react-router-dom";
const customBrowser = ["$REACT_ROUTER_COMPONENT", { component: HashRouter }];

// Add your new Feature into the ForrestJS' manifest:
forrestjs.run({
  ...
  features: [app, customBrowser]
});
```

[![Edit react-router-hash-hook](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-router-hash-hook-2hosh?fontsize=14&hidenavigation=1&theme=dark)
