import firestore from '@react-native-firebase/firestore';
import {IApiData} from '../interfaces/interfaces';

export const removePhotoFromDatabase = (photo: IApiData, id: string) => {
  firestore()
    .doc(`users/${id}`)
    .update({
      photoData: firestore.FieldValue.arrayRemove(photo),
    });
};
