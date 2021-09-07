import React, {useContext, useCallback} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {UserSvg} from '../../../assets/svg';
import {useDispatch, useSelector} from 'react-redux';
import {signOutProfile} from '../../store/action/authAction';
import {IAppState} from '../../store/types';
import {DEFAULT_USER, SCREENS} from '../../constants/constants';
import {ThemeContext} from '../../context/ThemeContext';
import {signOut} from '../../utils/signOut';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {UserDrawerParamsList} from '../../interfaces/interfaces';

export const ProfileScreen: React.FC = () => {
  const {colors} = useContext(ThemeContext);
  const bgColor = {backgroundColor: colors.background};
  const textColor = {color: colors.text};
  const {isAuthWithoutReg} = useSelector(
    (state: IAppState) => state.authReducer,
  );

  const navigation =
    useNavigation<NavigationProp<UserDrawerParamsList, SCREENS>>();

  const {name, surname} = useSelector((store: IAppState) => store.authReducer);

  const userName = isAuthWithoutReg ? DEFAULT_USER.name : name;
  const userSurname = isAuthWithoutReg ? DEFAULT_USER.surname : surname;

  const dispatch = useDispatch();

  const handleSignOut = useCallback(() => {
    signOut();
    dispatch(signOutProfile());
  }, [dispatch]);

  const handleMoveLikedPhoto = () => {
    navigation.navigate(SCREENS.likedPhoto);
  };

  return (
    <View style={[styles.profileWrapper, bgColor]}>
      <UserSvg />
      <Text style={[styles.userName, textColor]}>{userName}</Text>
      <Text style={[styles.userName, textColor]}>{userSurname}</Text>
      <View style={styles.singOutContainer}>
        <TouchableHighlight onPress={handleSignOut}>
          <View style={styles.signOutBtn}>
            <Text>Sign Out</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.singOutContainer}>
        <TouchableHighlight onPress={handleMoveLikedPhoto}>
          <View style={styles.signOutBtn}>
            <Text>Check my photo</Text>
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
