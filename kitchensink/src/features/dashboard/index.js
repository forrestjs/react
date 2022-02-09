import * as targets from './targets';
import { DashboardMenuItems } from './DashboardMenuItems';
import { DashboardContent } from './DashboardContent';

export const dashboard = ({ registerTargets, createExtension, setContext }) => {
  registerTargets(targets);

  return [
    {
      target: '$LAYOUT_DRAWER_PRIMARY_LIST_ITEMS',
      handler: () => DashboardMenuItems,
    },
    {
      target: '$LAYOUT_ROUTE',
      handler: () => ({
        exact: true,
        path: '/',
        element: <DashboardContent />,
      }),
    },
    {
      target: '$LAYOUT_TITLE',
      handler: () => 'JSON Placeholder UI',
    },
    {
      target: '$INIT_SERVICE',
      handler: () => {
        const dashboardItems = createExtension
          .sync(targets.DASHBOARD_ITEM)
          .map((_) => _[0]);

        setContext('dashboard.items', dashboardItems);
      },
    },
  ];
};
