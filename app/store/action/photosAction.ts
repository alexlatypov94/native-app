import {PhotosActionTypes} from './../reducer/photosReducer/types';

// RANDOM PHOTO

export function startRequest(value: string, page: number) {
  return {
    type: PhotosActionTypes.GET_REQUEST_PHOTO,
    payload: {value, page},
  };
}

export function successRequest() {
  return {
    type: PhotosActionTypes.GET_REQUEST_SUCCESS,
  };
}

export function errorRequest() {
  return {
    type: PhotosActionTypes.GET_REQUEST_FAILURE,
  };
}

// REFRESH

export function refreshRequest() {
  return {
    type: PhotosActionTypes.GET_REFRESH_REQUEST,
  };
}
export function refreshRequestSuccess() {
  return {
    type: PhotosActionTypes.GET_REFRESH_REQUEST,
  };
}
export function refreshRequestFailure() {
  return {
    type: PhotosActionTypes.GET_REFRESH_REQUEST,
  };
}

// TOP PHOTO

export function getTopPhotoRequest() {
  return {
    type: PhotosActionTypes.GET_REFRESH_REQUEST,
  };
}
export function getTopPhotoRequestSuccess() {
  return {
    type: PhotosActionTypes.GET_REFRESH_REQUEST,
  };
}
export function getTopPhotoRequestFailure() {
  return {
    type: PhotosActionTypes.GET_REFRESH_REQUEST,
  };
}

// LATEST PHOTO

export function getLatestPhotoRequest() {
  return {
    type: PhotosActionTypes.GET_REFRESH_REQUEST,
  };
}
export function getLatestRequestSuccess() {
  return {
    type: PhotosActionTypes.GET_REFRESH_REQUEST,
  };
}
export function getLatestRequestFailure() {
  return {
    type: PhotosActionTypes.GET_REFRESH_REQUEST,
  };
}

// ON CLEAR DATA

export function onClearPhotoData() {
  return {
    type: PhotosActionTypes.ON_CLEAR_PHOTO_DATA,
  };
}
