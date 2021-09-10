import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
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
import {useSelector} from 'react-redux';
import {IAppState} from '../store/types';
import {ProfileWithoutRegistr} from '../screens/ProfileWithoutRegistr';
import {useNavigation} from '@react-navigation/core';

const Tab = createBottomTabNavigator();

export const RootStack: React.FC = () => {
  const {colors} = useContext(ThemeContext);

  const navigate = useNavigation();

  const {isAuthWithoutReg} = useSelector(
    (store: IAppState) => store.authReducer,
  );

  const ProfileTab = isAuthWithoutReg ? ProfileWithoutRegistr : ProfileScreen;

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

  const goBackIcon = () => {
    const handleGoBack = () => navigate.goBack();
    return (
      <TouchableWithoutFeedback onPress={handleGoBack}>
        <MaterialCommunityIcons
          name={ICONS_NAME.arrow_left}
          size={MATERIAL_ICON_SIZES.medium}
          color={COLORS.white}
        />
      </TouchableWithoutFeedback>
    );
  };

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
    },
    settings: {tabBarIcon: settingsIcon},
    selectedPhoto: {headerLeft: goBackIcon, tabBarItemStyle: {display: 'none'}},
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

  const date = new Date().getMilliseconds();

  useEffect(() => {
    console.log((Date.now() - date) * 1000);
  });

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.main}>
        <Tab.Navigator
          initialRouteName={SCREENS.photos}
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
            component={ProfileTab}
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
