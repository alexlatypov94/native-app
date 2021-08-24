import {IApiData} from '../../../components/interface';

export enum PhotosActionTypes {
  REQUEST_PHOTO = 'REQUEST_PHOTO',
  REQUEST_SUCCESS = 'REQUEST_SUCCESS',
  REQUEST_FAILURE = 'REQUEST_FAILURE',
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
