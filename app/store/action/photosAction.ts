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

export function fetchPhoto() {
  return {
    type: PhotosActionTypes.REQUEST_PHOTO,
  };
}

export function errorFetchPhoto() {
  return {
    type: PhotosActionTypes.FETCH_PHOTO_ERROR,
  };
}
