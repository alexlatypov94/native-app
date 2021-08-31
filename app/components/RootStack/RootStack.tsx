import React, {useContext} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {SCREENS} from '../constants/constants';
import {ThemeContext} from '../context/ThemeContext';
import {ProfileScreen} from './Main/ProfileScreen/ProfileScreen';
import {SettingsScreen} from './Main/SettingsScreen/SettingsScreen';
import {StartScreen} from './Main/StartScreen/StartScreen';
import {SelectedPhoto} from './Main/SelectedPhoto/SelectedPhoto';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {LikedPhotoScreen} from './Main/LikedPhotoScreen/LikedPhotoScreen';
import {DispatcherScreen} from './Main/PhotoScreen/DispatcherScreen';

const Tab = createBottomTabNavigator();

export const RootStack: React.FC = () => {
  const {colors} = useContext(ThemeContext);

  const bgColor = {backgroundColor: colors.background};
  const tintColor = colors.tintColor;
  const textColor = {color: colors.text};

  const homeIcon = () => (
    <MaterialCommunityIcons name="home-outline" size={30} color="#fff" />
  );
  const galeryIcon = () => (
    <MaterialCommunityIcons name="image-outline" size={30} color="#fff" />
  );
  const profileIcon = () => (
    <MaterialCommunityIcons name="account" size={30} color="#fff" />
  );
  const settingsIcon = () => (
    <MaterialCommunityIcons name="cog-outline" size={30} color="#fff" />
  );

  const screenOptions: BottomTabNavigationOptions = {
    headerTintColor: tintColor,
    tabBarStyle: {...bgColor},
    tabBarShowLabel: false,
    headerStyle: {
      ...bgColor,
      borderBottomWidth: 1,
      borderBottomColor: '#fff',
    },
    headerTitleAlign: 'center',
    headerTitleStyle: textColor,
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.main}>
        <Tab.Navigator
          initialRouteName={SCREENS.start}
          screenOptions={screenOptions}
          backBehavior={'history'}>
          <Tab.Screen
            name={SCREENS.start}
            component={StartScreen}
            options={{tabBarIcon: homeIcon}}
          />
          <Tab.Screen
            name={SCREENS.dispatcherScreen}
            component={DispatcherScreen}
            options={{
              headerShown: false,
              tabBarIcon: galeryIcon,
            }}
          />
          <Tab.Screen
            name={SCREENS.profile}
            component={ProfileScreen}
            options={{title: 'My Profile', tabBarIcon: profileIcon}}
          />
          <Tab.Screen
            name={SCREENS.settings}
            component={SettingsScreen}
            options={{tabBarIcon: settingsIcon}}
          />
          <Tab.Screen
            name={SCREENS.selectedPhoto}
            component={SelectedPhoto}
            options={{headerShown: false, tabBarItemStyle: {display: 'none'}}}
          />
          <Tab.Screen
            name={SCREENS.likedPhoto}
            component={LikedPhotoScreen}
            options={{
              title: 'Liked photos',
              tabBarItemStyle: {display: 'none'},
              unmountOnBlur: true,
            }}
          />
        </Tab.Navigator>
      </View>
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
