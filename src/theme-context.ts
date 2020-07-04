import React from 'react';

export const themes = {
  light: {
    backgroundColor: '#eeeeee',
  },
  dark: {
    black: '#212121',
    white: '#EEEEEE',
    red: '#E57373',
  },
};

export const ThemeContext = React.createContext(themes.dark);
