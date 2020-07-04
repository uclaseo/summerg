// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Tabs} from './src/Tabs';

import {ThemeContext, themes} from './src/theme-context';

// const themes = {
//   light: {
//     foreground: '#000000',
//     background: '#eeeeee',
//   },
//   dark: {
//     foreground: '#ffffff',
//     background: '#222222',
//   },
// };

// const ThemeContext = React.createContext(themes.light);

export default function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
