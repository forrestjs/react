import { blueGrey } from '@mui/material/colors';

export const muiTheme = ({ registerAction }) => {
  registerAction({
    hook: '$MUI_SET_THEME',
    handler: (theme) => ({
      ...theme,
      palette: {
        primary: blueGrey,
      },
    }),
  });
};
