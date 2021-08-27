import React, {useCallback, useContext, useState} from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import {SCREENS} from '../../../constants/constants';
import {PhotoScreen} from './PhotoScreen';
import {ModalWindow} from '../../ModalWindow/ModalWindow';
import {Filter} from '../../Filter/Filter';
import {ThemeContext} from '../../../context/ThemeContext';

const Drawer = createDrawerNavigator();

export const DispatcherScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleModalVisible = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const {colors} = useContext(ThemeContext);

  const bgColor = {backgroundColor: colors.background};
  const tintColor = colors.tintColor;
  const textColor = colors.text;
  const headerRight = () => <Filter onVisibleModal={handleModalVisible} />;
  const screenOptions: DrawerNavigationOptions = {
    headerTintColor: tintColor,
    headerStyle: {
      ...bgColor,
      borderBottomWidth: 1,
      borderBottomColor: '#fff',
    },
    headerTitleAlign: 'center',
    headerTitleStyle: {color: textColor},
    headerTitle: 'My Studio',
    headerRight: headerRight,
    drawerStyle: {...bgColor},
    unmountOnBlur: true,
  };

  return (
    <>
      <ModalWindow isVisible={isVisible} onChangeVisible={handleModalVisible} />

      <Drawer.Navigator
        initialRouteName={SCREENS.photos}
        screenOptions={screenOptions}>
        <Drawer.Screen
          name={SCREENS.photos}
          component={PhotoScreen}
          options={{drawerLabel: 'Random Photo', headerTitle: 'Random Photo'}}
        />
        <Drawer.Screen
          name={SCREENS.topPhotos}
          component={PhotoScreen}
          options={{drawerLabel: 'Top Photo', headerTitle: 'Top Photo'}}
        />
        <Drawer.Screen
          name={SCREENS.newPhotos}
          component={PhotoScreen}
          options={{drawerLabel: 'New Photo', headerTitle: 'New Photo'}}
        />
      </Drawer.Navigator>
    </>
  );
};
