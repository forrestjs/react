import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ListItemLink from '../../components/ListItemLink';

export const InvoicesMenuItems = () => (
  <ListItemLink to="/invoices">
    <ListItemIcon>
      <ReceiptIcon />
    </ListItemIcon>
    <ListItemText primary="Invoices" />
  </ListItemLink>
);
