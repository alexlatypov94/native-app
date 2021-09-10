import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, SafeAreaView} from 'react-native';
import {SCREENS} from '../constants/constants';
import {AuthScreen, RegistrationScreen} from '../screens';

const Stack = createStackNavigator();

export const AuthStack: React.FC = () => {
  console.log('called');
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
});
