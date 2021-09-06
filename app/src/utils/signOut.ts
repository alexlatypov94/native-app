import auth from '@react-native-firebase/auth';

export const signOut = () => {
  auth().signOut();
};
