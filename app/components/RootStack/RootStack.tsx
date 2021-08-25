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
import {Filter} from './Filter/Filter';
import {SelectedPhoto} from './Main/SelectedPhoto/SelectedPhoto';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

const Stack = createStackNavigator<UserDrawerParamsList>();

export const RootStack: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const {colors} = useContext(ThemeContext);

  const handleModalVisible = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const bgColor = {backgroundColor: colors.background};
  const tintColor = colors.tintColor;
  const textColor = {color: colors.text};
  const screenOptions: StackNavigationOptions = {
    headerTintColor: tintColor,
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
        <Stack.Navigator
          initialRouteName={SCREENS.start}
          screenOptions={screenOptions}>
          <Stack.Screen name={SCREENS.start} component={StartScreen} />
          <Stack.Screen
            name={SCREENS.photos}
            component={PhotoScreen}
            options={{
              headerRight: headerRight,
              title: 'My Studio',
            }}
          />
          <Stack.Screen
            name={SCREENS.profile}
            component={ProfileScreen}
            options={{title: 'My Profile'}}
          />
          <Stack.Screen name={SCREENS.settings} component={SettingsScreen} />
          <Stack.Screen
            name={SCREENS.selectedPhoto}
            component={SelectedPhoto}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
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
