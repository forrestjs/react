import React from 'react';
import { createContext, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const MUIThemeContext = createContext();

export const MUIWrapper = ({ defaultTheme, initialThemes, app }) => {
  const [themes, setThemes] = useState(initialThemes);
  const [currentTheme, setMUITheme] = useState(initialThemes[defaultTheme]);

  const applyMUITheme = (themeName) => {
    setMUITheme(themes[themeName]);
  };

  const addMUITheme = (name, data) => {
    setThemes({ ...themes, [name]: data });
  };

  const ctx = {
    currentTheme,
    setMUITheme,
    applyMUITheme,
    addMUITheme,
  };

  console.log({ ctx });

  return (
    <MUIThemeContext.Provider value={ctx}>
      <MUIThemeContext.Consumer>
        {({ currentTheme }) => (
          <ThemeProvider theme={createTheme(currentTheme)}>
            <CssBaseline />
            {app}
          </ThemeProvider>
        )}
      </MUIThemeContext.Consumer>
    </MUIThemeContext.Provider>
  );
};
