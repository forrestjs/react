import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppsIcon from '@mui/icons-material/Apps';
import ListItemLink from '../../components/ListItemLink';

export const DashboardMenuItems = () => (
  <ListItemLink to="/">
    <ListItemIcon>
      <AppsIcon />
    </ListItemIcon>
    <ListItemText primary="dashboard" />
  </ListItemLink>
);
