import firestore from '@react-native-firebase/firestore';

export const checkUserInDB = async (id: string) => {
  return await firestore()
    .collection('users')
    .doc(id)
    .get()
    .then(res => res.data());
};
