import {combineReducers} from 'redux';
import photosReducer from './photosReducer/photosReducer';
import authReducer from './authReducer/authReducer';
import likedPhotoReducer from './likedPhotoReducer/likedPhotoReducer';

export default combineReducers({
  photosReducer,
  authReducer,
  likedPhotoReducer,
});
