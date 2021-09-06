import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  Dimensions,
  TextInput,
} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SCREENS, UNDERLAY_COLOR_AUTH} from '../constants/constants';
import {useInput} from '../hooks';
import {UserDrawerParamsList} from '../interfaces/interfaces';
import {emailValidator, signIn} from '../utils/index';
import {useDispatch} from 'react-redux';
import {startAuth, setAuthWithoutReg} from '../store/action/authAction';
import auth from '@react-native-firebase/auth';

export const AuthPage: React.FC = () => {
  const navigator =
    useNavigation<NavigationProp<UserDrawerParamsList, SCREENS.signup>>();

  const [inValidEmail, setInValidEmail] = useState(false);

  const email = useInput('');
  const password = useInput('');

  const dispatch = useDispatch();
  const handleAuthWithoutReg = () => dispatch(setAuthWithoutReg());
  const handleAuth = () => {
    auth().onAuthStateChanged(user => {
      console.log(user?.email);
      dispatch(startAuth(user?.uid as string));
    });
  };

  const handlePress = () => {
    const checkEmail = emailValidator(email.value);
    if (checkEmail) {
      signIn(email.value, password.value);
      handleAuth();
    } else {
      setInValidEmail(true);
    }
  };

  const handleMoveReg = () => {
    navigator.navigate(SCREENS.signup);
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.inputField}
        placeholder="E-mail"
        autoCapitalize="none"
        {...email}
      />
      {inValidEmail && (
        <Text style={styles.invalidEmail}>email is invalid</Text>
      )}
      <TextInput
        style={styles.inputField}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        {...password}
      />
      <Button onPress={handlePress} title="Log in" />
      <View style={styles.touchContainer}>
        <TouchableHighlight
          onPress={handleMoveReg}
          underlayColor={UNDERLAY_COLOR_AUTH}
          style={styles.touchRadius}>
          <View style={styles.moveRegStyle}>
            <Text>Sign Up</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.touchContainer}>
        <TouchableHighlight
          onPress={handleAuthWithoutReg}
          underlayColor={UNDERLAY_COLOR_AUTH}
          style={styles.touchRadius}>
          <View style={styles.moveRegStyle}>
            <Text>Continue without registration</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    fontSize: 20,
    width: '80%',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  btnStyle: {
    width: '80%',
  },
  touchContainer: {
    marginVertical: 20,
  },
  moveRegStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width - 100,
    padding: 10,
  },
  touchRadius: {
    borderRadius: 10,
  },
  invalidEmail: {
    color: 'red',
    fontSize: 18,
  },
});
