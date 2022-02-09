import { InvoicesMenuItems } from './InvoicesMenuItems';
import { InvoicesContent } from './InvoicesContent';
import { InvoicesDashboard } from './InvoicesDashboard';

export const invoices = () => [
  {
    target: '$LAYOUT_DRAWER_PRIMARY_LIST_ITEMS',
    handler: () => InvoicesMenuItems,
  },
  {
    target: '$LAYOUT_ROUTE',
    handler: () => ({
      path: '/invoices',
      element: <InvoicesContent />,
    }),
  },
  {
    target: '$DASHBOARD_ITEM',
    handler: () => ({
      title: 'Invoices',
      lg: 8,
      md: 6,
      component: InvoicesDashboard,
    }),
  },
];
