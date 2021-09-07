import {IApiData} from '../../interfaces/interfaces';
import {PhotosActionTypes} from '../reducer/photosReducer/types';

// RANDOM PHOTO

export function startRequest(
  value: string,
  page: number,
  searchValue: string = '',
) {
  return {
    type: PhotosActionTypes.GET_REQUEST_PHOTO,
    payload: {value, page, searchValue},
  };
}

export function successRequest(photoData: Array<IApiData>) {
  return {
    type: PhotosActionTypes.GET_REQUEST_SUCCESS,
    payload: {photoData},
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
export function refreshRequestSuccess(photoData: Array<IApiData>) {
  return {
    type: PhotosActionTypes.GET_REFRESH_REQUEST_SUCCESS,
    payload: {photoData},
  };
}
export function refreshRequestFailure() {
  return {
    type: PhotosActionTypes.GET_REFRESH_REQUEST_FAILURE,
  };
}

// TOP PHOTO

export function getTopPhotoRequest() {
  return {
    type: PhotosActionTypes.GET_TOP_PHOTO_REQUEST,
  };
}
export function getTopPhotoRequestSuccess(photoData: Array<IApiData>) {
  return {
    type: PhotosActionTypes.GET_TOP_PHOTO_REQUEST_SUCCESS,
    payload: {photoData},
  };
}
export function getTopPhotoRequestFailure() {
  return {
    type: PhotosActionTypes.GET_TOP_PHOTO_REQUEST_FAILURE,
  };
}

// LATEST PHOTO

export function getLatestPhotoRequest() {
  return {
    type: PhotosActionTypes.GET_LATEST_PHOTO_REQUEST,
  };
}
export function getLatestRequestSuccess(photoData: Array<IApiData>) {
  return {
    type: PhotosActionTypes.GET_LATEST_REQUEST_SUCCESS,
    payload: {photoData},
  };
}
export function getLatestRequestFailure() {
  return {
    type: PhotosActionTypes.GET_LATEST_REQUEST_FAILURE,
  };
}

// ON CLEAR DATA

export function onClearPhotoData() {
  return {
    type: PhotosActionTypes.ON_CLEAR_PHOTO_DATA,
  };
}

// ADD SEARCH VALUE

export function addSearchValue(searchValue: string = '') {
  return {
    type: PhotosActionTypes.ADD_SEARCH_VALUE,
    payload: {searchValue},
  };
}
