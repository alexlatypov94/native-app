import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {UserSvg} from '../../../../assets/svg';
import {USER} from '../../../constants/constants';
import {ThemeContext} from '../../../context/ThemeContext';

export const ProfileScreen: React.FC = () => {
  const {colors} = useContext(ThemeContext);
  const bgColor = {backgroundColor: colors.background};
  const textColor = {color: colors.text};

  return (
    <View style={[styles.profileWrapper, bgColor]}>
      <Text style={[styles.profileTitle, textColor]}>My Profile</Text>
      <UserSvg />
      <Text style={[styles.userName, textColor]}>{USER.name}</Text>
      <Text style={[styles.userName, textColor]}>{USER.surname}</Text>
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
