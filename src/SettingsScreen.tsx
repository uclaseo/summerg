import * as React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {ThemeContext} from './theme-context';
import MapView from 'react-native-maps';

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
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} />
    </View>
  );
};
