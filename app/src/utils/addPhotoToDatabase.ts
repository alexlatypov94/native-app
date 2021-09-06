import firestore from '@react-native-firebase/firestore';
import {IApiData} from '../interfaces/interfaces';

export const addPhotoToDataBase = (photo: IApiData, id: string) => {
  firestore()
    .doc(`users/${id}`)
    .update({
      photoData: firestore.FieldValue.arrayUnion(photo),
    });
};
