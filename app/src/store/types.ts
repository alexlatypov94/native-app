import {IAuthState} from './reducer/authReducer/types';
import {ILikedPhotoState} from './reducer/likedPhotoReducer/types';
import {IPhotosReducerState} from './reducer/photosReducer/types';

export interface IAppState {
  photosReducer: IPhotosReducerState;
  authReducer: IAuthState;
  likedPhotoReducer: ILikedPhotoState;
}
