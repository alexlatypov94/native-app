import firestore from '@react-native-firebase/firestore';
import {IApiData} from './../interface/index';

export const removePhotoFromDatabase = (photo: IApiData, id: string) => {
  firestore()
    .doc(`users/${id}`)
    .update({
      photoData: firestore.FieldValue.arrayRemove(photo),
    });
};
