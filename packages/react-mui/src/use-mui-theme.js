import { useContext } from 'react';
import { MUIThemeContext } from './MuiWrapper';

export const useMUITheme = () => {
  const { currentTheme, applyMUITheme, setMUITheme, addMUITheme } =
    useContext(MUIThemeContext);

  return {
    applyMUITheme,
    setMUITheme,
    addMUITheme,
    currentMUITheme: currentTheme,
  };
};
