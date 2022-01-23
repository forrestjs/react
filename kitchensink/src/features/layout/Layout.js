import * as React from 'react';

import { useGetContext } from '@forrestjs/react-root';
import { LayoutRoutes } from './LayoutRoutes';
import { LayoutAppBar } from './LayoutAppBar';
import { LayoutDrawer } from './LayoutDrawer';
import { LayoutDrawerHeader } from './LayoutDrawerHeader';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

export const Layout = () => {
  const title = useGetContext('layout.title');
  const content = useGetContext('layout.content', []);
  const routes = useGetContext('layout.routes', []);
  const drawerWidth = useGetContext('layout.drawer.width');
  const drawerOpen = useGetContext('layout.drawer.open');
  const isDrawerEnabled = !useGetContext('layout.drawer.disable');
  const primaryListItems = useGetContext(
    'layout.drawer.list.primary.items',
    [],
  );
  const secondaryListItems = useGetContext(
    'layout.drawer.list.secondary.items',
    [],
  );

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(drawerOpen);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <LayoutAppBar
        {...{
          title,
          isDrawerOpen,
          handleDrawerOpen,
          drawerWidth,
          isDrawerEnabled,
        }}
      />
      {isDrawerEnabled && (
        <LayoutDrawer
          width={drawerWidth}
          isOpen={isDrawerOpen}
          handleClose={handleDrawerClose}
          primaryItems={primaryListItems}
          secondaryItems={secondaryListItems}
        />
      )}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <LayoutDrawerHeader />
        <LayoutRoutes items={routes} />
        {content.map((ContentItem, idx) => (
          <ContentItem key={ContentItem.name} />
        ))}
      </Box>
      foo
    </Box>
  );
};
