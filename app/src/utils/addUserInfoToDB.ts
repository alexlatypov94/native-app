import {FormUserOtherData} from './../interfaces/interfaces';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const addUserInfoToDB = (userInfo: FormUserOtherData) => {
  auth().onAuthStateChanged(user => {
    firestore()
      .collection('users')
      .doc(user?.uid)
      .update({...userInfo})
      .then(() => console.log('User added'));
  });
};
