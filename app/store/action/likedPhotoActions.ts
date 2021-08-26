import {LikedPhotoActionTypes} from './../reducer/likedPhotoReducer/types';
import {IApiData} from '../../components/interface';

export function addLikedPhoto(data: IApiData, isLike: boolean) {
  return {
    type: LikedPhotoActionTypes.SET_LIKED_PHOTO,
    payload: {...data, liked_by_user: isLike},
  };
}
