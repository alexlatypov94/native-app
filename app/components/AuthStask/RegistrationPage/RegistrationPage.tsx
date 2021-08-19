import React from 'react';
import {useState} from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import {useInput} from '../../hooks';
import {createUser, emailValidator} from '../../utils/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const RegistrationPage: React.FC = () => {
  const [inValidEmail, setInvalidEmail] = useState<boolean>(false);
  const name = useInput('');
  const surname = useInput('');
  const email = useInput('');
  const password = useInput('');
  const confirmPassword = useInput('');

  const storeData = async (userName: string, userSurName: string) => {
    try {
      const userData = JSON.stringify({userName, userSurName});
      await AsyncStorage.setItem(email.value, userData);
      await AsyncStorage.setItem('email', email.value);
    } catch (error) {
      Alert.alert(error);
    }
  };

  const handleSignUp = () => {
    const checkEmail = emailValidator(email.value);
    if (checkEmail && password.value === confirmPassword.value) {
      createUser(email.value, password.value);
      storeData(name.value, surname.value);
      console.log('signup');
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
