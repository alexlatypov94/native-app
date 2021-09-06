import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';
import {useInput} from '../hooks';
import {addUserToDataBase, createUser, emailValidator} from '../utils/index';
import {useDispatch} from 'react-redux';
import {registration} from '../store/action/authAction';

export const RegistrationPage: React.FC = () => {
  const [inValidEmail, setInvalidEmail] = useState<boolean>(false);
  const name = useInput('');
  const surname = useInput('');
  const email = useInput('');
  const password = useInput('');
  const confirmPassword = useInput('');
  const dispatch = useDispatch();
  const storeData = (userName: string, userSurname: string) => {
    dispatch(registration({name: userName, surname: userSurname}));
  };

  const handleSignUp = () => {
    const checkEmail = emailValidator(email.value);
    if (checkEmail && password.value === confirmPassword.value) {
      createUser(email.value, password.value);
      storeData(name.value, surname.value);
      addUserToDataBase({name: name.value, surname: surname.value});
    } else {
      setInvalidEmail(true);
    }
  };

  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your name"
          {...name}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your surname"
          {...surname}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your E-mail"
          autoCapitalize="none"
          {...email}
        />
        {inValidEmail && (
          <Text style={styles.invalidEmail}>email is invalid</Text>
        )}
        <TextInput
          style={styles.textInput}
          placeholder="Enter password"
          secureTextEntry={true}
          autoCapitalize="none"
          {...password}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Confirm password"
          secureTextEntry={true}
          autoCapitalize="none"
          {...confirmPassword}
        />
        <Button onPress={handleSignUp} title="Sign Up" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '80%',
    fontSize: 20,
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 20,
  },
  invalidEmail: {
    color: 'red',
    fontSize: 18,
  },
});
