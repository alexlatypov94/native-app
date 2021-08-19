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
import React, {useState} from 'react';
import {Appearance} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  DARK_COLORS,
  LIGHT_COLORS,
  ThemeContext,
} from './components/context/ThemeContext';
import {RootStack} from './components/RootStack/RootStack';
import {AuthStack} from './components/AuthStack/AuthStack';

const App = () => {
  const colorScheme = Appearance.getColorScheme();
  const [isDark, setIsDark] = useState<boolean>(colorScheme === 'dark');
  const [isAuth, setIsAuth] = useState<boolean>(true);

  const handleAuthWithoutReg = () => {
    setIsAuth(true);
  };

  const defaultTheme = {
    isDark,
    colors: isDark ? DARK_COLORS : LIGHT_COLORS,
    setColorScheme: (scheme: string) => setIsDark(scheme === 'dark'),
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      <NavigationContainer>
        {isAuth ? (
          <RootStack isDark={isDark} />
        ) : (
          <AuthStack handleAuthWithoutReg={handleAuthWithoutReg} />
        )}
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1,
//   },
//   main: {
//     flex: 15,
//   },
// });

export default App;
