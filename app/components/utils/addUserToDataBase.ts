import auth from '@react-native-firebase/auth';
import {IUserInfoDB} from './../interface/index';
import firestore from '@react-native-firebase/firestore';

export const addUserToDataBase = (userInfo: IUserInfoDB) => {
  auth().onAuthStateChanged(user => {
    firestore()
      .collection('users')
      .doc(user?.uid)
      .set({...userInfo, photoData: []})
      .then(() => console.log('User added'));
  });
};
