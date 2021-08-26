import {IApiData} from './../../../components/interface/index';
import {
  ILikedPhotoState,
  ILikedPhotoAction,
  LikedPhotoActionTypes,
} from './types';

const initialState: ILikedPhotoState = {
  likedPhotoData: [],
};

const likedPhotoReducer = (
  state: ILikedPhotoState = initialState,
  action: ILikedPhotoAction,
) => {
  switch (action.type) {
    case LikedPhotoActionTypes.SET_LIKED_PHOTO:
      return {
        ...state,
        likedPhotoData: helper(state?.likedPhotoData, action?.payload).filter(
          el => {
            if (el && el.liked_by_user === true) {
              return el;
            }
          },
        ),
      };
    default:
      return state;
  }
};

const helper = (storageData: IApiData[], payload: IApiData) => {
  const foundedPhoto = storageData?.find(
    (el: IApiData) => el?.id === payload?.id,
  );
  console.log(storageData);
  if (foundedPhoto) {
    return storageData?.map((el: IApiData) => {
      if (el?.id === payload?.id) {
        Object.assign(el, payload);
      }
      return el;
    });
  }
  return [...storageData, payload];
};

export default likedPhotoReducer;
