import React, {useCallback, useContext, useState} from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import {COLORS, HEADER_TITLES, SCREENS} from '../../../constants/constants';
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
  const textColor = {color: colors.text};
  const headerRight = () => <Filter onVisibleModal={handleModalVisible} />;
  const screenOptions: DrawerNavigationOptions = {
    headerTintColor: tintColor,
    headerStyle: {
      ...bgColor,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.white,
    },
    headerTitleAlign: 'center',
    headerTitleStyle: textColor,
    drawerStyle: bgColor,
    drawerLabelStyle: textColor,
    unmountOnBlur: true,
  };

  const DrawerScreensOptions = {
    photos: {
      drawerLabel: HEADER_TITLES.randomPhotos,
      headerTitle: HEADER_TITLES.randomPhotos,
      headerRight: headerRight,
    },
    topPhotos: {
      drawerLabel: HEADER_TITLES.topPhotos,
      headerTitle: HEADER_TITLES.topPhotos,
    },
    newPhotos: {
      drawerLabel: HEADER_TITLES.newPhotos,
      headerTitle: HEADER_TITLES.newPhotos,
    },
  };

  return (
    <>
      <ModalWindow isVisible={isVisible} onChangeVisible={handleModalVisible} />

      <Drawer.Navigator
        initialRouteName={SCREENS.photos}
        screenOptions={screenOptions}
        backBehavior={'history'}>
        <Drawer.Screen
          name={SCREENS.photos}
          component={PhotoScreen}
          options={DrawerScreensOptions.photos}
        />
        <Drawer.Screen
          name={SCREENS.topPhotos}
          component={PhotoScreen}
          options={DrawerScreensOptions.topPhotos}
        />
        <Drawer.Screen
          name={SCREENS.newPhotos}
          component={PhotoScreen}
          options={DrawerScreensOptions.newPhotos}
        />
      </Drawer.Navigator>
    </>
  );
};
