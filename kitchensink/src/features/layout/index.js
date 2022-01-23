import * as hooks from './hooks';
import { Layout } from './Layout';

export const layout = ({
  registerHook,
  registerAction,
  createHook,
  getConfig,
  setContext,
}) => {
  registerHook(hooks);

  registerAction({
    hook: '$INIT_SERVICE',
    handler: () => {
      const { value: layoutTitle } = createHook.waterfall(
        hooks.LAYOUT_TITLE,
        getConfig('layout.title', 'Dashboard'),
      );

      const layoutContent = createHook
        .sync(hooks.LAYOUT_CONTENT)
        .map((_) => _[0]);

      const layoutRoutes = createHook.sync(hooks.LAYOUT_ROUTE).map((_) => _[0]);

      const { value: drawerWidth } = createHook.waterfall(
        hooks.LAYOUT_DRAWER_WIDTH,
        getConfig('layout.drawer.width', 240),
      );

      const { value: drawerDisable } = createHook.waterfall(
        hooks.LAYOUT_DRAWER_DISABLE,
        getConfig('layout.drawer.disable', false),
      );

      const { value: drawerOpen } = createHook.waterfall(
        hooks.LAYOUT_DRAWER_OPEN,
        getConfig('layout.drawer.open', false),
      );

      const primaryListItems = createHook
        .sync(hooks.LAYOUT_DRAWER_PRIMARY_LIST_ITEMS)
        .map((_) => _[0]);

      const secondaryListItems = createHook
        .sync(hooks.LAYOUT_DRAWER_SECONDARY_LIST_ITEMS)
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
  });

  registerAction({
    hook: '$REACT_ROOT_COMPONENT',
    handler: { component: Layout },
  });
};
