// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Tabs} from './src/Tabs';

import {ThemeContext, themes} from './src/theme-context';

export default function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
