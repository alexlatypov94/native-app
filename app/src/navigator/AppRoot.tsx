/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {DARK_COLORS, LIGHT_COLORS, ThemeContext} from '../context/ThemeContext';
import {IAppState} from '../store/types';
import {RootStack} from './RootStack';
import {AuthStack} from './AuthStack';
import {startAuth} from '../store/action/authAction';
import auth from '@react-native-firebase/auth';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export const AppRoot = () => {
  const {isAuth, theme} = useSelector((state: IAppState) => state.authReducer);
  const [isDark, setIsDark] = useState<boolean>(theme === 'dark');
  const dispatch = useDispatch();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      dispatch(startAuth(user?.uid as string));
    });
  }, [dispatch]);

  const defaultTheme = {
    isDark,
    colors: isDark ? DARK_COLORS : LIGHT_COLORS,
    setColorScheme: (scheme: string) => setIsDark(scheme === 'dark'),
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      <SafeAreaProvider>
        <NavigationContainer>
          {isAuth ? <RootStack /> : <AuthStack />}
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeContext.Provider>
  );
};
