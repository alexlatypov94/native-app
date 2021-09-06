import {IApiData} from './../../components/interface/index';
import {LikedPhotoActionTypes} from './../reducer/likedPhotoReducer/types';

export function addLikedPhoto(data: IApiData, isLike: boolean) {
  return {
    type: LikedPhotoActionTypes.SET_LIKED_PHOTO,
    payload: {likedPhotoData: {...data, liked_by_user: isLike}},
  };
}

export function getPhotoFromDBRequestStart(id: string) {
  return {
    type: LikedPhotoActionTypes.GET_REQUEST_PHOTO_DB_START,
    payload: {id},
  };
}

export function getPhotoFromDBRequestSuccess(likedPhotoData: Array<IApiData>) {
  return {
    type: LikedPhotoActionTypes.GET_REQUEST_PHOTO_DB_SUCCESS,
    payload: {likedPhotoData},
  };
}

export function getPhotoFromDBRequestFailure() {
  return {
    type: LikedPhotoActionTypes.GET_REQUEST_PHOTO_DB_FAILURE,
  };
}
