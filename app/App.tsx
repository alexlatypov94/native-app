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
import {Appearance, SafeAreaView, StyleSheet, View} from 'react-native';
import {UserMenu} from './components/UserMenu/UserMenu';
import {Header} from './components/Header/Header';
import {NavigationContainer} from '@react-navigation/native';
import {StartScreen} from './components/Main/StartScreen/StartScreen';
import {PhotoScreen} from './components/Main/PhotoScreen/PhotoScreen';
import {SCREENS} from './components/constants/constants';
import {SettingsScreen} from './components/Main/SettingsScreen/SettingsScreen';
import {ProfileScreen} from './components/Main/ProfileScreen/ProfileScreen';
import {UserDrawerParamsList} from './components/interface';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ModalWindow} from './components/ModalWindow/ModalWindow';
import {createStackNavigator} from '@react-navigation/stack';
import {
  DARK_COLORS,
  LIGHT_COLORS,
  ThemeContext,
} from './components/context/ThemeContext';
import {AuthPage} from './components/AuthPage.tsx/AuthPage';
import {RegistrationPage} from './components/RegistrationPage/RegistrationPage';

const Drawer = createDrawerNavigator<UserDrawerParamsList>();
const Stack = createStackNavigator();

const App = () => {
  const colorScheme = Appearance.getColorScheme();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(colorScheme === 'dark');
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const handleModalVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleAuthWithoutReg = () => {
    setIsAuth(true);
  };

  const defaultTheme = {
    isDark,
    colors: isDark ? DARK_COLORS : LIGHT_COLORS,
    setColorScheme: (scheme: string) => setIsDark(scheme === 'dark'),
  };

  return isAuth ? (
    <ThemeContext.Provider value={defaultTheme}>
      <NavigationContainer>
        <SafeAreaView style={styles.wrapper}>
          <Header onChangeVisible={handleModalVisible} />
          <View style={styles.main}>
            <ModalWindow
              isVisible={isVisible}
              onChangeVisible={handleModalVisible}
            />
            <Drawer.Navigator
              initialRouteName={SCREENS.start}
              screenOptions={{
                headerShown: false,
                drawerStyle: {
                  backgroundColor: isDark
                    ? DARK_COLORS.background
                    : LIGHT_COLORS.background,
                },
                drawerLabelStyle: {
                  color: isDark ? DARK_COLORS.text : LIGHT_COLORS.text,
                },
              }}>
              <Drawer.Screen name={SCREENS.start} component={StartScreen} />
              <Drawer.Screen name={SCREENS.photos} component={PhotoScreen} />
              <Drawer.Screen name={SCREENS.profile} component={ProfileScreen} />
              <Drawer.Screen
                name={SCREENS.settings}
                component={SettingsScreen}
              />
            </Drawer.Navigator>
          </View>
          <UserMenu />
        </SafeAreaView>
      </NavigationContainer>
    </ThemeContext.Provider>
  ) : (
    <NavigationContainer>
      <SafeAreaView style={styles.wrapper}>
        <Stack.Navigator initialRouteName={SCREENS.auth}>
          <Stack.Screen
            name={SCREENS.auth}
            component={() => <AuthPage oNClickAuth={handleAuthWithoutReg} />}
          />
          <Stack.Screen name={SCREENS.signup} component={RegistrationPage} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
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

export default App;
