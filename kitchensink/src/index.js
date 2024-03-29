import forrestjs from '@forrestjs/core';

// Services
import reactRoot from '@forrestjs/react-root';
import reactMUI from '@forrestjs/react-mui';
import reactRouter from '@forrestjs/react-router';
import reactAxios from './react-axios';

// Features
import { muiTheme } from './features/mui-theme';
import { layout } from './features/layout';
import { dashboard } from './features/dashboard';
import { users } from './features/users';
import { invoices } from './features/invoices';
import { login } from './features/login';

forrestjs
  .run({
    // trace: 'compact',
    settings: {
      layout: {
        drawer: {
          // disable: true,
          // open: true,
          // width: 450,
        },
      },
    },
    services: [reactRoot, reactMUI, reactRouter, reactAxios],
    features: [muiTheme, layout, dashboard, users, invoices, login],
  })
  .catch((err) => console.error(`Boot: ${err.message}`));
