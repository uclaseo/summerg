import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen} from './HomeScreen';
import {SettingsScreen} from './SettingsScreen';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
