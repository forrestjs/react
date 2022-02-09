import { UsersMenuItems } from './components/UsersMenuItems';
import { UsersDashboard } from './components/UsersDashboard';
import { UsersList } from './containers/UsersList';
import { UserDetails } from './containers/UserDetails';

export const users = () => [
  {
    target: '$LAYOUT_DRAWER_PRIMARY_LIST_ITEMS',
    handler: () => UsersMenuItems,
  },
  {
    target: '$LAYOUT_ROUTE',
    handler: () => ({
      exact: true,
      path: '/users',
      element: <UsersList />,
    }),
  },
  {
    target: '$LAYOUT_ROUTE',
    handler: () => ({
      exact: true,
      path: '/users/:id',
      element: <UserDetails />,
    }),
  },
  {
    target: '$DASHBOARD_ITEM',
    handler: () => ({
      title: 'Users',
      lg: 4,
      md: 6,
      component: UsersDashboard,
    }),
  },
];
