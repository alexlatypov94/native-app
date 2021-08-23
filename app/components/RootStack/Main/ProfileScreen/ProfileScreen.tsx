import React, {useEffect, useState, useContext, useCallback} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {UserSvg} from '../../../../assets/svg';
import {ThemeContext} from '../../../context/ThemeContext';
import {signOut} from '../../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {signOutProfile} from '../../../../store/action/authAction';
import {IAppState} from '../../../../store/types';
import {DEFAULT_USER} from '../../../constants/constants';

export const ProfileScreen: React.FC = () => {
  const [userInfo, setUserInfo] = useState<any>({});
  const {colors} = useContext(ThemeContext);
  const bgColor = {backgroundColor: colors.background};
  const textColor = {color: colors.text};
  const {isAuthWithoutReg} = useSelector(
    (state: IAppState) => state.authReducer,
  );

  const name = isAuthWithoutReg ? DEFAULT_USER.name : userInfo.userName;
  const surname = isAuthWithoutReg
    ? DEFAULT_USER.surname
    : userInfo.userSurName;

  const getData = async () => {
    try {
      const currentEmail = await AsyncStorage.getItem('email');
      const userData = await AsyncStorage.getItem(currentEmail as string);
      setUserInfo(JSON.parse(userData as string));
    } catch (error) {}
  };

  const dispatch = useDispatch();

  const handleSignOut = useCallback(() => {
    signOut();
    dispatch(signOutProfile());
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={[styles.profileWrapper, bgColor]}>
      <UserSvg />
      <Text style={[styles.userName, textColor]}>{name}</Text>
      <Text style={[styles.userName, textColor]}>{surname}</Text>
      <View style={styles.singOutContainer}>
        <TouchableHighlight onPress={handleSignOut}>
          <View style={styles.signOutBtn}>
            <Text>Sign Out</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 24,
    marginTop: 20,
  },
  profileTitle: {
    fontSize: 30,
    marginBottom: 20,
  },
  singOutContainer: {
    width: '80%',
    marginTop: 20,
  },
  signOutBtn: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,
  },
});
