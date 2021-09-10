import React, {useContext, useCallback, useEffect} from 'react';
import {Text, TouchableHighlight, View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signOutProfile, startAuth} from '../../store/action/authAction';
import {IAppState} from '../../store/types';
import {SCREENS} from '../../constants/constants';
import {ThemeContext} from '../../context/ThemeContext';
import {signOut} from '../../utils/signOut';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {UserDrawerParamsList} from '../../interfaces/interfaces';
import {ScrollView} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import {styles} from './styles';
import {UserSvg} from '../../../assets/svg';
import {ProfileWithoutRegistr} from '../ProfileWithoutRegistr';

export const ProfileScreen: React.FC = () => {
  const {colors} = useContext(ThemeContext);
  const bgColor = {backgroundColor: colors.background};
  const textColor = {color: colors.text};

  const navigation =
    useNavigation<NavigationProp<UserDrawerParamsList, SCREENS>>();

  const {name, surname, age, biography, gender, avatarUrl, id, isAuth} =
    useSelector((store: IAppState) => store.authReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      auth().onAuthStateChanged(user => {
        dispatch(startAuth(user?.uid as string));
      });
    }
  }, [dispatch, id]);

  const handleSignOut = useCallback(() => {
    signOut();
    dispatch(signOutProfile());
  }, [dispatch]);

  const handleMoveLikedPhoto = () => {
    navigation.navigate(SCREENS.likedPhoto);
  };

  const handleMoveToForm = () => {
    navigation.navigate(SCREENS.infoForm);
  };

  const imgSource = {uri: avatarUrl, height: 200, width: 200};

  return isAuth ? (
    <ScrollView>
      <View style={[styles.profileWrapper, bgColor]}>
        {avatarUrl ? (
          <Image style={styles.avatarStyles} source={imgSource} />
        ) : (
          <UserSvg />
        )}
        <Text style={[styles.userName, textColor]}>{name}</Text>
        <Text style={[styles.userName, textColor]}>{surname}</Text>
        {!!age && (
          <Text style={[styles.userName, textColor]}>{`Age: ${age}`}</Text>
        )}
        {!!gender && (
          <Text
            style={[styles.userName, textColor]}>{`Gender: ${gender}`}</Text>
        )}
        {!!biography && (
          <Text style={[styles.userName, textColor]}>{biography}</Text>
        )}
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
        <View style={styles.singOutContainer}>
          <TouchableHighlight onPress={handleMoveToForm}>
            <View style={styles.signOutBtn}>
              <Text>Fill in information</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  ) : (
    <ProfileWithoutRegistr />
  );
};
