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
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {DARK_COLORS, LIGHT_COLORS, ThemeContext} from '../context/ThemeContext';
import {IAppState} from '../store/types';
import {RootStack} from './RootStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export const AppRoot = () => {
  const {theme} = useSelector((state: IAppState) => state.authReducer);
  const [isDark, setIsDark] = useState<boolean>(theme === 'dark');

  const defaultTheme = {
    isDark,
    colors: isDark ? DARK_COLORS : LIGHT_COLORS,
    setColorScheme: (scheme: string) => setIsDark(scheme === 'dark'),
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeContext.Provider>
  );
};
