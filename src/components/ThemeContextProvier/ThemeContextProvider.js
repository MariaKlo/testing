import React, { useMemo } from 'react';
import { ThemeContext, ThemeContextSetter } from '../../contexts/ThemeContext';
import { useTheme } from '../../hooks/useTheme';

export const ThemeContextProvider = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const { theme: buttonTheme, toggleTheme: toggleButtonTheme } = useTheme();

  const setters = useMemo(() => ({ toggleTheme, toggleButtonTheme }), []);
  const values = useMemo(() => ({ theme, buttonTheme }), [theme, buttonTheme]);

  return (
    <ThemeContextSetter.Provider value={setters}>
      <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    </ThemeContextSetter.Provider>
  );
};
