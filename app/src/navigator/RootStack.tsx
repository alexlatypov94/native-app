import React, {useContext} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {
  COLORS,
  HEADER_TITLES,
  ICONS_NAME,
  MATERIAL_ICON_SIZES,
  SCREENS,
} from '../constants/constants';
import {ThemeContext} from '../context/ThemeContext';

import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerNavigator} from './DrawerNavigator';
import {
  LikedPhotoScreen,
  ProfileScreen,
  SelectedPhotoScreen,
  SettingsScreen,
  StartScreen,
  UserInfoFormScreen,
} from '../screens';

const Tab = createBottomTabNavigator();

export const RootStack: React.FC = () => {
  const {colors} = useContext(ThemeContext);

  const bgColor = {backgroundColor: colors.background};
  const tintColor = colors.tintColor;
  const textColor = {color: colors.text};

  const homeIcon = () => (
    <MaterialCommunityIcons
      name={ICONS_NAME.home}
      size={MATERIAL_ICON_SIZES.medium}
      color={COLORS.white}
    />
  );
  const galeryIcon = () => (
    <MaterialCommunityIcons
      name={ICONS_NAME.image}
      size={MATERIAL_ICON_SIZES.medium}
      color={COLORS.white}
    />
  );
  const profileIcon = () => (
    <MaterialCommunityIcons
      name={ICONS_NAME.account}
      size={MATERIAL_ICON_SIZES.medium}
      color={COLORS.white}
    />
  );
  const settingsIcon = () => (
    <MaterialCommunityIcons
      name={ICONS_NAME.settings}
      size={MATERIAL_ICON_SIZES.medium}
      color={COLORS.white}
    />
  );

  const screenOptions: BottomTabNavigationOptions = {
    headerTintColor: tintColor,
    tabBarStyle: bgColor,
    tabBarShowLabel: false,
    headerStyle: {
      ...bgColor,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.white,
    },
    headerTitleAlign: 'center',
    headerTitleStyle: textColor,
  };

  const StackScreensOptions = {
    start: {tabBarIcon: homeIcon},
    dispatcher: {headerShown: false, tabBarIcon: galeryIcon},
    profile: {
      title: HEADER_TITLES.myProfile,
      tabBarIcon: profileIcon,
      unmountOnBlur: true,
    },
    settings: {tabBarIcon: settingsIcon},
    selectedPhoto: {headerShown: false, tabBarItemStyle: {display: 'none'}},
    likedPhoto: {
      title: HEADER_TITLES.likedPhotos,
      tabBarItemStyle: {display: 'none'},
      unmountOnBlur: true,
    },
    userInfo: {
      title: HEADER_TITLES.fillInfo,
      tabBarItemStyle: {display: 'none'},
    },
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
            options={StackScreensOptions.start}
          />
          <Tab.Screen
            name={SCREENS.dispatcherScreen}
            component={DrawerNavigator}
            options={StackScreensOptions.dispatcher}
          />
          <Tab.Screen
            name={SCREENS.profile}
            component={ProfileScreen}
            options={StackScreensOptions.profile}
          />
          <Tab.Screen
            name={SCREENS.settings}
            component={SettingsScreen}
            options={StackScreensOptions.settings}
          />
          <Tab.Screen
            name={SCREENS.selectedPhoto}
            component={SelectedPhotoScreen}
            options={
              StackScreensOptions.selectedPhoto as BottomTabNavigationOptions
            }
          />
          <Tab.Screen
            name={SCREENS.likedPhoto}
            component={LikedPhotoScreen}
            options={
              StackScreensOptions.likedPhoto as BottomTabNavigationOptions
            }
          />
          <Tab.Screen
            name={SCREENS.infoForm}
            component={UserInfoFormScreen}
            options={StackScreensOptions.userInfo as BottomTabNavigationOptions}
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
    flex: 1,
  },
});
