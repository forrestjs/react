import { UsersMenuItems } from './components/UsersMenuItems';
import { UsersDashboard } from './components/UsersDashboard';
import { UsersList } from './containers/UsersList';
import { UserDetails } from './containers/UserDetails';

export const users = ({ registerAction }) => {
  registerAction({
    hook: '$LAYOUT_DRAWER_PRIMARY_LIST_ITEMS',
    handler: () => UsersMenuItems,
  });

  registerAction({
    hook: '$LAYOUT_ROUTE',
    handler: () => ({
      exact: true,
      path: '/users',
      component: UsersList,
    }),
  });

  registerAction({
    hook: '$LAYOUT_ROUTE',
    handler: () => ({
      exact: true,
      path: '/users/:id',
      component: UserDetails,
    }),
  });

  registerAction({
    hook: '$DASHBOARD_ITEM',
    handler: () => ({
      title: 'Users',
      lg: 4,
      md: 6,
      component: UsersDashboard,
    }),
  });
};
