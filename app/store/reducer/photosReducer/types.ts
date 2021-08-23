import {IApiData} from '../../../components/interface';

export enum PhotosActionTypes {
  FETCH_PHOTO = 'FETCH_PHOTO',
  FETCH_PHOTO_LOADING_START = 'FETCH_PHOTO_LOADING_START',
  FETCH_PHOTO_LOADING_END = 'FETCH_PHOTO_LOADING_END',
  FETCH_PHOTO_ERROR = 'FETCH_PHOTO_ERROR',
  REQUEST_PHOTO = 'REQUEST_PHOTO',
}

export interface IPhotosReducerState {
  photoData: Array<IApiData>;
  isLoading: boolean;
  isError: boolean;
}

export interface IPhotosAction {
  type: PhotosActionTypes;
  payload: Array<IApiData>;
}
