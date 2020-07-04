import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ThemeContext} from './theme-context';

export interface HomeScreenProps {
  propTestOne: string;
  propTestTwo: number;
}

export const HomeScreen = (props: HomeScreenProps) => {
  const theme = React.useContext(ThemeContext);
  return (
    <View style={{...styles.container, ...theme}}>
      <Text>
        Hello from {props.propTestOne} and {props.propTestTwo}!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginRight: -2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
