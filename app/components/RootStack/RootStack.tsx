import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {SCREENS} from '../constants/constants';
import {DARK_COLORS, LIGHT_COLORS} from '../context/ThemeContext';
import {UserDrawerParamsList} from '../interface';
import {PhotoScreen} from './Main/PhotoScreen/PhotoScreen';
import {ProfileScreen} from './Main/ProfileScreen/ProfileScreen';
import {SettingsScreen} from './Main/SettingsScreen/SettingsScreen';
import {StartScreen} from './Main/StartScreen/StartScreen';
import {ModalWindow} from './ModalWindow/ModalWindow';
import {UserMenu} from './UserMenu/UserMenu';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Filter} from './Filter/Filter';

const Drawer = createDrawerNavigator<UserDrawerParamsList>();

interface IRootStackProp {
  isDark: boolean;
}

export const RootStack: React.FC<IRootStackProp> = ({isDark}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleModalVisible = () => {
    setIsVisible(!isVisible);
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.main}>
        <ModalWindow
          isVisible={isVisible}
          onChangeVisible={handleModalVisible}
        />
        <Drawer.Navigator
          initialRouteName={SCREENS.start}
          screenOptions={{
            headerTintColor: isDark ? '#fff' : '#000',
            headerStyle: {
              backgroundColor: isDark
                ? DARK_COLORS.background
                : LIGHT_COLORS.background,
              borderBottomWidth: 1,
              borderBottomColor: '#fff',
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: isDark ? DARK_COLORS.text : LIGHT_COLORS.text,
            },
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
          <Drawer.Screen
            name={SCREENS.photos}
            component={PhotoScreen}
            options={{
              headerRight: () => (
                <Filter isDark={isDark} onVisibleModal={handleModalVisible} />
              ),
            }}
          />
          <Drawer.Screen name={SCREENS.profile} component={ProfileScreen} />
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
