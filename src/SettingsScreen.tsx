import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface SettingsScreenProps {
  compiler: string;
  framework: string;
}

export const SettingsScreen = (props: SettingsScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>
        Settings from {props.compiler} and {props.framework}!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
