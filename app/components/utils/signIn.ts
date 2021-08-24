import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const signIn = (email: string, password: string) => {
  try {
    auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    Alert.alert(error);
  }
};
