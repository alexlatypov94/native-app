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
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {UserMenu} from './components/UserMenu/UserMenu';
import {Header} from './components/Header/Header';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {StartScreen} from './components/Main/StartScreen/StartScreen';
import {PhotoScreen} from './components/Main/PhotoScreen/PhotoScreen';
import {SCREENS} from './components/constants/constants';
import {SettingsScreen} from './components/Main/SettingsScreen/SettingsScreen';
import {ProfileScreen} from './components/Main/ProfileScreen/ProfileScreen';
import {UserStackParamsList} from './components/interface';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator<UserStackParamsList>();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.wrapper}>
        <Header />
        <View style={styles.main}>
          <Drawer.Navigator
            initialRouteName={SCREENS.start}
            screenOptions={{
              headerShown: false,
              drawerStyle: {
                backgroundColor: '#1b2122',
              },
              drawerLabelStyle: {
                color: '#fff',
              },
            }}>
            <Drawer.Screen name={SCREENS.start} component={StartScreen} />
            <Drawer.Screen name={SCREENS.photos} component={PhotoScreen} />
            <Drawer.Screen name={SCREENS.settings} component={SettingsScreen} />
            <Drawer.Screen name={SCREENS.profile} component={ProfileScreen} />
          </Drawer.Navigator>
        </View>
        <UserMenu />
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
