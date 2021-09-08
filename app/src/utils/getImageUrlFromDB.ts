import storage from '@react-native-firebase/storage';
export const getImageUrlFromDb = async (id: string) => {
  return await storage().ref(id).getDownloadURL();
};
