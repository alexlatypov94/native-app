import storage from '@react-native-firebase/storage';

export const addImageToFirebaseStorage = async (
  filepath: string,
  id: string,
) => {
  await storage().ref(id).putFile(filepath);
};
