/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
// import 'react-native-gesture-handler';
import React, {useCallback, useEffect, useState} from 'react';
import {Appearance} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {DARK_COLORS, LIGHT_COLORS, ThemeContext} from './context/ThemeContext';
import {IAppState} from '../store/types';
import {RootStack} from './RootStack/RootStack';
import {AuthStack} from './AuthStack/AuthStack';
import {setAuth} from '../store/action/authAction';
import firestore from '@react-native-firebase/firestore';
import {IUserInfoDB} from './interface';

const AppRoot = () => {
  const colorScheme = Appearance.getColorScheme();
  const [isDark, setIsDark] = useState<boolean>(colorScheme === 'dark');
  const [userInfo, setUserInfo] = useState<IUserInfoDB>({
    name: '',
    surname: '',
  });

  const {isAuth} = useSelector((state: IAppState) => state.authReducer);

  const dispatch = useDispatch();
  const setAuthorization = useCallback(
    (
      value: boolean,
      id: string = '',
      name: string = '',
      surname: string = '',
    ) => {
      dispatch(setAuth(value, id, name, surname));
    },
    [dispatch],
  );
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        firestore()
          .collection('users')
          .doc(user?.uid)
          .get()
          .then(res => {
            const data = res.data();
            setUserInfo({name: data?.name, surname: data?.surname});
          });

        setAuthorization(true, user.uid, userInfo?.name, userInfo?.surname);
      } else {
        setAuthorization(false);
      }
    });
  }, [setAuthorization, userInfo?.name, userInfo?.surname]);

  const defaultTheme = {
    isDark,
    colors: isDark ? DARK_COLORS : LIGHT_COLORS,
    setColorScheme: (scheme: string) => setIsDark(scheme === 'dark'),
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      <NavigationContainer>
        {isAuth ? <RootStack /> : <AuthStack />}
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default AppRoot;
