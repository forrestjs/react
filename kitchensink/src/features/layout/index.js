import * as targets from './targets';
import { Layout } from './Layout';

export const layout = ({
  registerTargets,
  createExtension,
  getConfig,
  setContext,
}) => {
  registerTargets(targets);

  return [
    {
      target: '$INIT_SERVICE',
      handler: () => {
        const { value: layoutTitle } = createExtension.waterfall(
          targets.LAYOUT_TITLE,
          getConfig('layout.title', 'Dashboard'),
        );

        const layoutContent = createExtension
          .sync(targets.LAYOUT_CONTENT)
          .map((_) => _[0]);

        const layoutRoutes = createExtension
          .sync(targets.LAYOUT_ROUTE)
          .map((_) => _[0]);

        const { value: drawerWidth } = createExtension.waterfall(
          targets.LAYOUT_DRAWER_WIDTH,
          getConfig('layout.drawer.width', 240),
        );

        const { value: drawerDisable } = createExtension.waterfall(
          targets.LAYOUT_DRAWER_DISABLE,
          getConfig('layout.drawer.disable', false),
        );

        const { value: drawerOpen } = createExtension.waterfall(
          targets.LAYOUT_DRAWER_OPEN,
          getConfig('layout.drawer.open', false),
        );

        const primaryListItems = createExtension
          .sync(targets.LAYOUT_DRAWER_PRIMARY_LIST_ITEMS)
          .map((_) => _[0]);

        const secondaryListItems = createExtension
          .sync(targets.LAYOUT_DRAWER_SECONDARY_LIST_ITEMS)
          .map((_) => _[0]);

        setContext('layout.title', layoutTitle);
        setContext('layout.content', layoutContent);
        setContext('layout.routes', layoutRoutes);
        setContext('layout.drawer.width', drawerWidth);
        setContext('layout.drawer.disable', drawerDisable);
        setContext('layout.drawer.open', drawerOpen);
        setContext('layout.drawer.list.primary.items', primaryListItems);
        setContext('layout.drawer.list.secondary.items', secondaryListItems);
      },
    },
    {
      target: '$REACT_ROOT_COMPONENT',
      handler: { component: Layout },
    },
  ];
};
