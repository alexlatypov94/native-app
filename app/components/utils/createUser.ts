import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const createUser = (email: string, password: string) => {
  try {
    auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    Alert.alert(error);
  }
};
