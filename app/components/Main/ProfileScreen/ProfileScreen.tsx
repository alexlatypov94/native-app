import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {UserSvg} from '../../../assets/svg';
import {USER} from '../../constants/constants';

export const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.profileWrapper}>
      <Text style={styles.profileTitle}>My Profile</Text>
      <UserSvg />
      <Text style={styles.userName}>{USER.name}</Text>
      <Text style={styles.userName}>{USER.surname}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileWrapper: {
    flex: 1,
    backgroundColor: '#1F2126',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 24,
    color: '#fff',
    marginTop: 20,
  },
  profileTitle: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 20,
  },
});
