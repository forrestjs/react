import { InvoicesMenuItems } from './InvoicesMenuItems';
import { InvoicesContent } from './InvoicesContent';
import { InvoicesDashboard } from './InvoicesDashboard';

export const invoices = ({ registerAction }) => {
  registerAction({
    hook: '$LAYOUT_DRAWER_PRIMARY_LIST_ITEMS',
    handler: () => InvoicesMenuItems,
  });

  registerAction({
    hook: '$LAYOUT_ROUTE',
    handler: () => ({
      path: '/invoices',
      element: <InvoicesContent />,
    }),
  });

  registerAction({
    hook: '$DASHBOARD_ITEM',
    handler: () => ({
      title: 'Invoices',
      lg: 8,
      md: 6,
      component: InvoicesDashboard,
    }),
  });
};
