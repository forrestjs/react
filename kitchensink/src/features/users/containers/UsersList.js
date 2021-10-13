import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

import ListItemLink from '../../../components/ListItemLink';
import PageContent from '../../../components/PageContent';
import PageItem from '../../../components/PageItem';

import useUsersList from '../state/use-users-list';

export const UsersList = () => {
  const { items } = useUsersList();

  return (
    <PageContent>
      <PageItem title="Users">
        <List>
          {items.map((item) => (
            <ListItemLink key={item.id} to={`/users/${item.id}`}>
              <ListItemText primary={item.name} secondary={item.email} />
            </ListItemLink>
          ))}
        </List>
      </PageItem>
    </PageContent>
  );
};
