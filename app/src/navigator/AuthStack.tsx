import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {SCREENS} from '../constants/constants';
import {AuthScreen, RegistrationScreen} from '../screens';

const Stack = createStackNavigator();

export const AuthStack: React.FC = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Stack.Navigator initialRouteName={SCREENS.auth}>
        <Stack.Screen name={SCREENS.auth} component={AuthScreen} />
        <Stack.Screen name={SCREENS.signup} component={RegistrationScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  main: {
    flex: 15,
  },
});
