import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import {Platform} from 'react-native';
import {ThemeContext} from './theme-context';

import {HomeScreen} from './HomeScreen';
import {SettingsScreen} from './SettingsScreen';
<Ionicons name="md-checkmark-circle" size={32} color="green" />;

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  const theme = React.useContext(ThemeContext);

  const screenOptions = ({route}) => {
    return {
      tabBarIcon: ({focused, color}) => {
        let iconName: string;
        let size: number = Platform.OS === 'android' ? 24 : 30;
        if (route.name === 'Home') {
          iconName = Platform.OS === 'android' ? 'md-bicycle' : 'ios-bicycle';
        } else if (route.name === 'Settings') {
          iconName = Platform.OS === 'android' ? 'md-settings' : 'ios-settings';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    };
  };
  const tabBarOptions = {
    activeTintColor: theme.red,
    inactiveTintColor: theme.white,
    activeBackgroundColor: theme.black,
    inactiveBackgroundColor: theme.black,
    showLabel: false,
  };
  return (
    <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
