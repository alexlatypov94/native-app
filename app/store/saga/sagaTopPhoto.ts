import {getPhotos} from './../../components/utils/getPhotos';
import {IApiData} from './../../components/interface/index';
import {
  IPhotosAction,
  PhotosActionTypes,
} from './../reducer/photosReducer/types';

import {takeEvery, call, put} from 'redux-saga/effects';
import {
  getTopPhotoRequestFailure,
  getTopPhotoRequestSuccess,
} from '../action/photosAction';

export function* watcherTopPhoto() {
  yield takeEvery(PhotosActionTypes.GET_TOP_PHOTO_REQUEST, workerTopPhoto);
}

function* workerTopPhoto(action: IPhotosAction) {
  try {
    const photos: Array<IApiData> = yield call(
      getPhotos,
      action.payload.value,
      action.payload.page,
    );
    yield put(getTopPhotoRequestSuccess(photos));
  } catch (error) {
    console.log(error);
    yield put(getTopPhotoRequestFailure());
  }
}
