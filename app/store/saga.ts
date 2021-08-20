import {PhotosActionTypes} from './reducer/photosReducer/types';
import {getPhotos} from './../components/utils/getPhotos';
import {call, put, takeEvery} from 'redux-saga/effects';
import {
  errorFetchPhoto,
  finishFetchPhoto,
  startFetchPhoto,
} from './action/photosAction';
import {IApiData} from '../components/interface';

export function* watcher() {
  yield takeEvery(PhotosActionTypes.REQUEST_PHOTO, photoWorker);
}

function* photoWorker() {
  try {
    yield put(startFetchPhoto());
    const payload: Array<IApiData> = yield call(getPhotos);
    yield put({type: PhotosActionTypes.FETCH_PHOTO, payload});
    yield put(finishFetchPhoto());
  } catch (error) {
    yield put(errorFetchPhoto());
  }
}
