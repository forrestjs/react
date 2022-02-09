# @ForrestJS/react-root

- It renders the App's root component using the local ReactDOM library
- It facilitates the App's wrapping with stuff like ReactRouter or ApolloContext
- It provides hooks to access the App's `config` and `context`

You can play with this documentation LIVE in CodeSandbox:

[![Edit kitchensink](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-root-cqqlh?fontsize=14&hidenavigation=1&theme=dark)

## Render the App's Root

First, we can create an `AppRoot.js` component that can access the App's configuration via React hooks:

```js
import { useGetConfig } from '@forrestjs/react-root';

export const AppRoot = () => {
  const value = useGetConfig('welcome.message');
  return <div>{value}</div>;
};
```

Now we can package our App using ForrestJS:

```js
import forrestjs from '@forrestjs/core';
import reactRoot, { getConfig } from '@forrestjs/react-root';
import { AppRoot } from './AppRoot';

// Your App should have one feature that implements the
// REACT_ROOT_COMPONENT hook to provide the... root component:
const rootEl = ['$REACT_ROOT_COMPONENT', { component: AppRoot }];

forrestjs
  .run({
    settings: {
      welcome: {
        message: 'Hello World',
      },
    },
    services: [reactRoot],
    features: [rootEl],
  })
  .catch((err) => console.error(`Boot: ${err.message}`));
```

## Add Application's Wrappers

More often than not, your App will require one or more wrappers for providing some form of context. Think at libraries like: [react-router](https://reactrouter.com/), [apollo-client](https://www.apollographql.com/docs/react/), [react-query](https://react-query.tanstack.com/), [mui](https://mui.com/);

They all do add a `ContextProvider` in the `index.js`:

```js
ReactDOM.render(
  <ApolloProvider>
    <MuiThemeProvider>
      <ReactRouterProvider>
        <MyCustomProvider>
          <App />
        </MyCustomProvider>
      </ReactRouterProvider>
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);
```

Looks familiar? Before the advent of `Promises` we were used to a similar pattern and it was oftend referenced as the **Callbacks Hell**.

Now we simply have a new one:  
**The Wrappers Hell**

ForrestJS simplifies this situation by providing a flat and declarative way to decorate your App with wrappers AND maintain a decoupled structure in your apps.

Let's create a simple App wrapper in `AppWrapper.js`:

```js
export const AppWrapper = ({ children }) => {
  return (
    <div>
      <h4>This is a Wrapper</h4>
      <hr />
      {children}
    </div>
  );
};
```

Now we can decorate our App with this wrapper using the hooks in `index.js`:

```js
import { AppWrapper } from './AppWrapper';

// Create a ForrestJS single hook feature:
const wrap1 = {
  target:'$REACT_ROOT_WRAPPER',
  handler:{ component: AppWrapper }
};

// Add the feature to the App, the order doesn't matter:
runHookApp({
  ...
  features: [rootEl, wrap1]
});
```

Other services provided by ForrestJS simply build on this hook:

- [react-router](../react-router)
- [react-mui](../react-mui)
