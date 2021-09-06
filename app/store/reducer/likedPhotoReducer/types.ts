import {IApiData} from './../../../components/interface/index';

export enum LikedPhotoActionTypes {
  SET_LIKED_PHOTO = 'SET_LIKED_PHOTO',
  GET_REQUEST_PHOTO_DB_START = 'GET_REQUEST_PHOTO_DB_START',
  GET_REQUEST_PHOTO_DB_SUCCESS = 'GET_REQUEST_PHOTO_DB_SUCCESS',
  GET_REQUEST_PHOTO_DB_FAILURE = 'GET_REQUEST_PHOTO_DB_FAILURE',
}

export interface ILikedPhotoState {
  likedPhotoData: Array<IApiData>;
}

export interface ILikedPhotoAction {
  type: LikedPhotoActionTypes;
  payload: {
    likedPhotoData: IApiData;
    id?: string;
  };
}
