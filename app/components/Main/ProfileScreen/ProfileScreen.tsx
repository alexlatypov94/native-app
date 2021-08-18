import React from 'react';
import {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {UserSvg} from '../../../assets/svg';
import {USER} from '../../constants/constants';
import {ThemeContext} from '../../context/ThemeContext';

export const ProfileScreen: React.FC = () => {
  const {colors} = useContext(ThemeContext);
  return (
    <View style={[styles.profileWrapper, {backgroundColor: colors.background}]}>
      <Text style={[styles.profileTitle, {color: colors.text}]}>
        My Profile
      </Text>
      <UserSvg />
      <Text style={[styles.userName, {color: colors.text}]}>{USER.name}</Text>
      <Text style={[styles.userName, {color: colors.text}]}>
        {USER.surname}
      </Text>
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
});
