/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
// import 'react-native-gesture-handler';
import React, {useState, useCallback} from 'react';
import {Appearance} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  DARK_COLORS,
  LIGHT_COLORS,
  ThemeContext,
} from './components/context/ThemeContext';
import {RootStack} from './components/RootStack/RootStack';
import {AuthStack} from './components/AuthStack/AuthStack';
import auth from '@react-native-firebase/auth';
import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  const colorScheme = Appearance.getColorScheme();
  const [isDark, setIsDark] = useState<boolean>(colorScheme === 'dark');
  const [isAuth, setIsAuth] = useState<boolean>(true);

  auth().onAuthStateChanged(user => {
    if (user) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  });

  const handleAuthWithoutReg = useCallback(() => {
    setIsAuth(true);
  }, []);

  const defaultTheme = {
    isDark,
    colors: isDark ? DARK_COLORS : LIGHT_COLORS,
    setColorScheme: (scheme: string) => setIsDark(scheme === 'dark'),
  };

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={defaultTheme}>
        <NavigationContainer>
          {isAuth ? (
            <RootStack isDark={isDark} />
          ) : (
            <AuthStack handleAuthWithoutReg={handleAuthWithoutReg} />
          )}
        </NavigationContainer>
      </ThemeContext.Provider>
    </Provider>
  );
};

export default App;
