import auth from '@react-native-firebase/auth';
import {IUserInfoDB} from '../interfaces/interfaces';
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
