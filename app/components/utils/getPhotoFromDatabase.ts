import firestore from '@react-native-firebase/firestore';

export const getPhotoFromDatabase = (id: string) => {
  return firestore()
    .collection('users')
    .doc(id)
    .get()
    .then(res => res.data());
};
