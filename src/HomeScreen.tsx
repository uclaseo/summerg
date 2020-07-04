import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface HomeScreenProps {
  propTestOne: string;
  propTestTwo: number;
}

export const HomeScreen = (props: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>
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
