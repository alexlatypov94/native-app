import {combineReducers} from 'redux';
import photosReducer from './photosReducer/photosReducer';
import authReducer from './authReducer/authReducer';

export default combineReducers({
  photosReducer,
  authReducer,
});
