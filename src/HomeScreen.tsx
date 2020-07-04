import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ThemeContext} from './theme-context';

export interface HomeScreenProps {
  propTestOne: string;
  propTestTwo: number;
}

export const HomeScreen = (props: HomeScreenProps) => {
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
      <Text>
        Hello from {props.propTestOne} and {props.propTestTwo}!
      </Text>
    </View>
  );
};
