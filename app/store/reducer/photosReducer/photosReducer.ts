import {IPhotosAction, IPhotosReducerState, PhotosActionTypes} from './types';

const initialState: IPhotosReducerState = {
  photos: [],
  isLoading: false,
  isError: false,
};

const photosReducer = (
  state: IPhotosReducerState = initialState,
  action: IPhotosAction,
) => {
  switch (action.type) {
    case PhotosActionTypes.FETCH_PHOTO:
      return {...state, photos: state.photos.concat(action.payload.photos)};
    case PhotosActionTypes.FETCH_PHOTO_ERROR:
      return {...state, isError: true};
    case PhotosActionTypes.FETCH_PHOTO_LOADING_START:
      return {...state, isLoading: true};
    case PhotosActionTypes.FETCH_PHOTO_LOADING_START:
      return {...state, isLoading: false};
    default:
      return state;
  }
};

export default photosReducer;
