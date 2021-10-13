import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import ListItemLink from '../../../components/ListItemLink';

export const UsersMenuItems = () => (
  <ListItemLink to="/users">
    <ListItemIcon>
      <PeopleIcon />
    </ListItemIcon>
    <ListItemText primary="Users" />
  </ListItemLink>
);
