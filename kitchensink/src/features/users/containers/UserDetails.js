import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import PageContent from '../../../components/PageContent';
import PageItem from '../../../components/PageItem';

import useUserDetails from '../state/use-user-details';

export const UserDetails = ({ match }) => {
  const { data } = useUserDetails(match.params.id);

  const pageTitle = data ? data.name : 'Loading...';
  const pageBody = data ? (
    <List>
      <ListItem>
        <ListItemText primary="Username" secondary={data.username} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Website" secondary={data.website} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Email" secondary={data.email} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Phone" secondary={data.phone} />
      </ListItem>
    </List>
  ) : (
    'Loading...'
  );

  return (
    <PageContent>
      <PageItem title={pageTitle}>{pageBody}</PageItem>
    </PageContent>
  );
};
