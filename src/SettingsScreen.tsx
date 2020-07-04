import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ThemeContext} from './theme-context';

export interface SettingsScreenProps {
  compiler: string;
  framework: string;
}

export const SettingsScreen = (props: SettingsScreenProps) => {
  const theme = React.useContext(ThemeContext);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.black,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>
        Settings from {props.compiler} and {props.framework}!
      </Text>
    </View>
  );
};
