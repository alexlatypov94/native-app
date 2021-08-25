import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {SCREENS} from '../constants/constants';
import {AuthPage} from './AuthPage.tsx/AuthPage';
import {RegistrationPage} from './RegistrationPage/RegistrationPage';

const Stack = createStackNavigator();

export const AuthStack: React.FC = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Stack.Navigator initialRouteName={SCREENS.auth}>
        <Stack.Screen name={SCREENS.auth} component={AuthPage} />
        <Stack.Screen name={SCREENS.signup} component={RegistrationPage} />
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
