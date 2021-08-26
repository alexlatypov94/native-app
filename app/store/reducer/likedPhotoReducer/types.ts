import {IApiData} from './../../../components/interface/index';

export enum LikedPhotoActionTypes {
  SET_LIKED_PHOTO = 'SET_LIKED_PHOTO',
}

export interface ILikedPhotoState {
  likedPhotoData: Array<IApiData>;
}

export interface ILikedPhotoAction {
  type: LikedPhotoActionTypes;
  payload: IApiData;
}
