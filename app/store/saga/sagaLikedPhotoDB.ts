import {getPhotoFromDatabase} from './../../components/utils/getPhotoFromDatabase';
import {
  LikedPhotoActionTypes,
  ILikedPhotoAction,
} from './../reducer/likedPhotoReducer/types';
import {call, put, takeEvery} from 'redux-saga/effects';
import {
  getPhotoFromDBRequestFailure,
  getPhotoFromDBRequestSuccess,
} from '../action/likedPhotoActions';

export function* likedPhotoWatcher() {
  yield takeEvery(
    LikedPhotoActionTypes.GET_REQUEST_PHOTO_DB_START,
    likedPhotoWorker,
  );
}

function* likedPhotoWorker(action: ILikedPhotoAction) {
  try {
    const {photoData} = yield call(
      getPhotoFromDatabase,
      action.payload.id as string,
    );

    yield put(getPhotoFromDBRequestSuccess(photoData));
  } catch (error) {
    console.log(error);
    yield put(getPhotoFromDBRequestFailure());
  }
}
