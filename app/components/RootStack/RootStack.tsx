import React, {useState, useCallback, useContext} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {SCREENS} from '../constants/constants';
import {ThemeContext} from '../context/ThemeContext';
import {PhotoScreen} from './Main/PhotoScreen/PhotoScreen';
import {ProfileScreen} from './Main/ProfileScreen/ProfileScreen';
import {SettingsScreen} from './Main/SettingsScreen/SettingsScreen';
import {StartScreen} from './Main/StartScreen/StartScreen';
import {ModalWindow} from './ModalWindow/ModalWindow';
import {Filter} from './Filter/Filter';
import {SelectedPhoto} from './Main/SelectedPhoto/SelectedPhoto';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

export const RootStack: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const {colors} = useContext(ThemeContext);

  const handleModalVisible = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const store = useSelector(state => state);
  console.log(store);

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

  const headerRight = () => <Filter onVisibleModal={handleModalVisible} />;

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.main}>
        <ModalWindow
          isVisible={isVisible}
          onChangeVisible={handleModalVisible}
        />
        <Tab.Navigator
          initialRouteName={SCREENS.start}
          screenOptions={screenOptions}>
          <Tab.Screen
            name={SCREENS.start}
            component={StartScreen}
            options={{tabBarIcon: homeIcon}}
          />
          <Tab.Screen
            name={SCREENS.photos}
            component={PhotoScreen}
            options={{
              headerRight: headerRight,
              title: 'My Studio',
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
        </Tab.Navigator>
      </View>
      {/* <UserMenu /> */}
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
