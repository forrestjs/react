import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export const ButtonLink = (props) => <Button component={Link} {...props} />;
