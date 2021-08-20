import React, {useState, useCallback, useContext} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {SCREENS} from '../constants/constants';
import {ThemeContext} from '../context/ThemeContext';
import {UserDrawerParamsList} from '../interface';
import {PhotoScreen} from './Main/PhotoScreen/PhotoScreen';
import {ProfileScreen} from './Main/ProfileScreen/ProfileScreen';
import {SettingsScreen} from './Main/SettingsScreen/SettingsScreen';
import {StartScreen} from './Main/StartScreen/StartScreen';
import {ModalWindow} from './ModalWindow/ModalWindow';
import {UserMenu} from './UserMenu/UserMenu';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import {Filter} from './Filter/Filter';

const Drawer = createDrawerNavigator<UserDrawerParamsList>();

export const RootStack: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const {colors} = useContext(ThemeContext);

  const handleModalVisible = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const bgColor = {backgroundColor: colors.background};
  const tintColor = colors.tintColor;
  const textColor = {color: colors.text};
  const screenOptions: DrawerNavigationOptions = {
    headerTintColor: tintColor,
    headerStyle: {
      ...bgColor,
      borderBottomWidth: 1,
      borderBottomColor: '#fff',
    },
    headerTitleAlign: 'center',
    headerTitleStyle: textColor,
    drawerStyle: bgColor,
    drawerLabelStyle: textColor,
  };

  const headerRight = () => <Filter onVisibleModal={handleModalVisible} />;

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.main}>
        <ModalWindow
          isVisible={isVisible}
          onChangeVisible={handleModalVisible}
        />
        <Drawer.Navigator
          initialRouteName={SCREENS.start}
          screenOptions={screenOptions}>
          <Drawer.Screen name={SCREENS.start} component={StartScreen} />
          <Drawer.Screen
            name={SCREENS.photos}
            component={PhotoScreen}
            options={{
              headerRight: headerRight,
            }}
          />
          <Drawer.Screen
            name={SCREENS.profile}
            component={ProfileScreen}
            options={{title: 'My Profile'}}
          />
          <Drawer.Screen name={SCREENS.settings} component={SettingsScreen} />
        </Drawer.Navigator>
      </View>
      <UserMenu />
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
