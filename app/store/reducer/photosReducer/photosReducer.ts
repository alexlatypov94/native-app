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
    case PhotosActionTypes.REQUEST_PHOTO:
      return {...state, isLoading: true};
    case PhotosActionTypes.REQUEST_SUCCESS:
      return {
        ...state,
        photoData: state.photoData.concat(action.payload),
        isLoading: false,
      };
    case PhotosActionTypes.REQUEST_FAILURE:
      return {...state, isError: true};
    default:
      return state;
  }
};

export default photosReducer;
