import {PhotosActionTypes} from './../reducer/photosReducer/types';

export function startRequest() {
  return {
    type: PhotosActionTypes.REQUEST_PHOTO,
  };
}

export function successRequest() {
  return {
    type: PhotosActionTypes.REQUEST_SUCCESS,
  };
}

export function errorRequest() {
  return {
    type: PhotosActionTypes.REQUEST_FAILURE,
  };
}
