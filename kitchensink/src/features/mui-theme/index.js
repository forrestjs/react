import { blueGrey } from '@mui/material/colors';

export const muiTheme = () => ({
  target: '$MUI_SET_THEME',
  handler: (theme) => ({
    ...theme,
    palette: {
      primary: blueGrey,
    },
  }),
});
