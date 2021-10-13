import { runHookApp } from '@forrestjs/hooks';

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

runHookApp({
  trace: 'compact',
  services: [reactRoot, reactMUI, reactRouter, reactAxios],
  features: [muiTheme, layout, dashboard, users, invoices],
}).catch((err) => console.error(`Boot: ${err.message}`));
