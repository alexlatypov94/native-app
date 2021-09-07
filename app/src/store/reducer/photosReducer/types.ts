import {IApiData} from '../../../interfaces/interfaces';

export enum PhotosActionTypes {
  GET_REQUEST_PHOTO = 'REQUEST_PHOTO',
  GET_REQUEST_SUCCESS = 'REQUEST_SUCCESS',
  GET_REQUEST_FAILURE = 'REQUEST_FAILURE',
  GET_REFRESH_REQUEST = 'GET_REFRESH_REQUEST',
  GET_REFRESH_REQUEST_SUCCESS = 'GET_REFRESH_REQUEST_SUCCESS',
  GET_REFRESH_REQUEST_FAILURE = 'GET_REFRESH_REQUEST_FAILURE',
  GET_TOP_PHOTO_REQUEST = 'GET_TOP_PHOTO_REQUEST',
  GET_TOP_PHOTO_REQUEST_SUCCESS = 'GET_TOP_PHOTO_REQUEST_SUCCESS',
  GET_TOP_PHOTO_REQUEST_FAILURE = 'GET_TOP_PHOTO_REQUEST_FAILURE',
  GET_LATEST_PHOTO_REQUEST = 'GET_LATEST_PHOTO_REQUEST',
  GET_LATEST_REQUEST_SUCCESS = 'GET_LATEST_REQUEST_SUCCESS',
  GET_LATEST_REQUEST_FAILURE = 'GET_LATEST_REQUEST_FAILURE',
  ON_CLEAR_PHOTO_DATA = 'ON_CLEAR_PHOTO_DATA',
  ADD_SEARCH_VALUE = 'ADD_SEARCH_VALUE',
}

export interface IPhotosReducerState {
  photoData: Array<IApiData>;
  isLoading: boolean;
  isError: boolean;
  searchValue: string;
}

export interface IPhotosAction {
  type: PhotosActionTypes;
  payload: {
    photoData: Array<IApiData>;
    value: string;
    page: number;
    searchValue: string;
    isLoading: boolean;
    isError: boolean;
  };
}
