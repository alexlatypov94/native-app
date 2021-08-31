import {IPhotosAction, IPhotosReducerState, PhotosActionTypes} from './types';

const initialState: IPhotosReducerState = {
  photoData: [],
  isLoading: false,
  isError: false,
  searchValue: '',
};

const photosReducer = (
  state: IPhotosReducerState = initialState,
  action: IPhotosAction,
) => {
  switch (action.type) {
    case PhotosActionTypes.GET_REQUEST_PHOTO:
      return {...state, isLoading: true};
    case PhotosActionTypes.GET_REQUEST_SUCCESS:
      return {
        ...state,
        photoData: state.photoData
          .concat(action?.payload?.photoData)
          .filter(el => el),
        isLoading: false,
      };
    case PhotosActionTypes.GET_REQUEST_FAILURE:
      return {...state, isError: true};
    case PhotosActionTypes.GET_REFRESH_REQUEST:
      return {...state, isLoading: true};
    case PhotosActionTypes.GET_REFRESH_REQUEST_SUCCESS:
      return {
        ...state,
        photoData: action?.payload?.photoData,
        isLoading: false,
      };
    case PhotosActionTypes.GET_REFRESH_REQUEST_FAILURE:
      return {...state, isError: true};
    case PhotosActionTypes.GET_TOP_PHOTO_REQUEST:
      return {...state, isLoading: true};
    case PhotosActionTypes.GET_TOP_PHOTO_REQUEST_SUCCESS:
      return {
        ...state,
        photoData: state.photoData
          .concat(action?.payload?.photoData)
          .filter(el => el),
        isLoading: false,
      };
    case PhotosActionTypes.GET_REFRESH_REQUEST_FAILURE:
      return {...state, isError: true};
    case PhotosActionTypes.GET_LATEST_PHOTO_REQUEST:
      return {...state, isLoading: true};
    case PhotosActionTypes.GET_LATEST_REQUEST_SUCCESS:
      return {
        ...state,
        photoData: state.photoData
          .concat(action?.payload?.photoData)
          .filter(el => el),
        isLoading: false,
      };
    case PhotosActionTypes.GET_LATEST_REQUEST_FAILURE:
      return {...state, isError: true};
    case PhotosActionTypes.ON_CLEAR_PHOTO_DATA:
      return {...state, photoData: []};
    case PhotosActionTypes.ADD_SEARCH_VALUE:
      return {...state, searchValue: action.payload.searchValue};
    default:
      return state;
  }
};

export default photosReducer;
