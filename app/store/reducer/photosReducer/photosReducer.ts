import {IPhotosAction, IPhotosReducerState, PhotosActionTypes} from './types';

const initialState: IPhotosReducerState = {
  photoData: [],
  isLoading: false,
  isError: false,
};

const photosReducer = (
  state: IPhotosReducerState = initialState,
  action: IPhotosAction,
) => {
  switch (action.type) {
    case PhotosActionTypes.FETCH_PHOTO:
      return {...state, photoData: state.photoData.concat(action.payload)};
    case PhotosActionTypes.FETCH_PHOTO_ERROR:
      return {...state, isError: true};
    case PhotosActionTypes.FETCH_PHOTO_LOADING_START:
      return {...state, isLoading: true};
    case PhotosActionTypes.FETCH_PHOTO_LOADING_END:
      return {...state, isLoading: false};
    default:
      return state;
  }
};

export default photosReducer;
