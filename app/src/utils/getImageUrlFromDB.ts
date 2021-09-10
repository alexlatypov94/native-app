import storage from '@react-native-firebase/storage';
export const getImageUrlFromDb = async (id: string) => {
  try {
    return await storage().ref(id).getDownloadURL();
  } catch (e) {
    return;
  }
};
