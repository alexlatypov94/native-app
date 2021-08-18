import React from 'react';
import {useState} from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {useInput} from '../hooks';
import {emailValidator} from '../utils/emailValidator';

export const RegistrationPage: React.FC = () => {
  const [inValidEmail, setInvalidEmail] = useState<boolean>(false);
  const name = useInput('');
  const surname = useInput('');
  const email = useInput('');
  const password = useInput('');
  const confirmPassword = useInput('');

  const handleSignUp = () => {
    const checkEmail = emailValidator(email.value);
    if (checkEmail) {
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
