import firestore from '@react-native-firebase/firestore';

export const checkUserInDB = (id: string) => {
  return firestore()
    .collection('users')
    .doc(id)
    .get()
    .then(res => res.data());
};
