import {PhotosActionTypes} from './reducer/photosReducer/types';
import {getPhotos} from './../components/utils/getPhotos';
import {call, put, takeEvery} from 'redux-saga/effects';
import {errorRequest, successRequest} from './action/photosAction';
import {IApiData} from '../components/interface';

export function* watcher() {
  yield takeEvery(PhotosActionTypes.REQUEST_PHOTO, photoWorker);
}

function* photoWorker() {
  try {
    const payload: Array<IApiData> = yield call(getPhotos);
    console.log(payload);
    yield put({type: PhotosActionTypes.REQUEST_SUCCESS, payload});

    yield put(successRequest());
  } catch (error) {
    console.log(error);
    yield put(errorRequest());
  }
}
