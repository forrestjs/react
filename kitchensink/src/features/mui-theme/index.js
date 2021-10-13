import { blueGrey } from '@mui/material/colors';

export const muiTheme = ({ registerAction }) => {
  registerAction({
    hook: '$MUI_THEME',
    handler: (theme) => ({
      ...theme,
      palette: {
        primary: blueGrey,
      },
    }),
  });
};
