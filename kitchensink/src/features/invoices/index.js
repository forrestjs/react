import { InvoicesMenuItems } from './InvoicesMenuItems';
import { InvoicesContent } from './InvoicesContent';
import { InvoicesDashboard } from './InvoicesDashboard';

export const invoices = () => [
  {
    targets: '$LAYOUT_DRAWER_PRIMARY_LIST_ITEMS',
    handler: () => InvoicesMenuItems,
  },
  {
    targets: '$LAYOUT_ROUTE',
    handler: () => ({
      path: '/invoices',
      element: <InvoicesContent />,
    }),
  },
  {
    targets: '$DASHBOARD_ITEM',
    handler: () => ({
      title: 'Invoices',
      lg: 8,
      md: 6,
      component: InvoicesDashboard,
    }),
  },
];
