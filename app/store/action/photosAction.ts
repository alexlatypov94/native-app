import {PhotosActionTypes} from './../reducer/photosReducer/types';

export function startFetchPhoto() {
  return {
    type: PhotosActionTypes.FETCH_PHOTO_LOADING_START,
  };
}

export function finishFetchPhoto() {
  return {
    type: PhotosActionTypes.FETCH_PHOTO_LOADING_END,
  };
}

export function successFetchPhoto() {
  return {
    type: PhotosActionTypes.FETCH_PHOTO,
  };
}

export function errorFetchPhoto() {
  return {
    type: PhotosActionTypes.FETCH_PHOTO_ERROR,
  };
}
