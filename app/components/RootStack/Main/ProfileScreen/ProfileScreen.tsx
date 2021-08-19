import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {UserSvg} from '../../../../assets/svg';
import {ThemeContext} from '../../../context/ThemeContext';
import {signOut} from '../../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ProfileScreen: React.FC = () => {
  const [userInfo, setUserInfo] = useState<any>({});
  const {colors} = useContext(ThemeContext);
  const bgColor = {backgroundColor: colors.background};
  const textColor = {color: colors.text};

  const getGata = async () => {
    try {
      const currentEmail = await AsyncStorage.getItem('email');
      const userData = await AsyncStorage.getItem(currentEmail as string);
      setUserInfo(JSON.parse(userData as string));
    } catch (error) {}
  };

  useEffect(() => {
    getGata();
  }, []);

  console.log(userInfo);

  return (
    <View style={[styles.profileWrapper, bgColor]}>
      <Text style={[styles.profileTitle, textColor]}>My Profile</Text>
      <UserSvg />
      <Text style={[styles.userName, textColor]}>{userInfo.userName}</Text>
      <Text style={[styles.userName, textColor]}>{userInfo.userSurName}</Text>
      <View style={styles.singOutContainer}>
        <TouchableHighlight onPress={signOut}>
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
