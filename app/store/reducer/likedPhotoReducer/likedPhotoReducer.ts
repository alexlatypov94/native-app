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
      console.log(action.payload);
      return {
        ...state,
        likedPhotoData: helper(
          state?.likedPhotoData,
          action?.payload.likedPhotoData,
        ).filter(el => {
          if (el && el.liked_by_user === true) {
            console.log(el);
            return el;
          }
        }),
      };
    case LikedPhotoActionTypes.GET_REQUEST_PHOTO_DB_SUCCESS:
      return {
        ...state,
        likedPhotoData: state.likedPhotoData
          .concat(action.payload.likedPhotoData)
          .reduce((acc: Array<IApiData>, curr: IApiData) => {
            const founded = acc.find((el: IApiData) => el.id === curr.id);
            if (founded) {
              return acc;
            }
            return [...acc, curr];
          }, []),
      };
    default:
      return state;
  }
};

const helper = (storageData: IApiData[], payload: IApiData) => {
  const foundedPhoto = storageData?.find(
    (el: IApiData) => el?.id === payload?.id,
  );
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
