import {IApiData} from './../../components/interface/index';
import {PhotosActionTypes, IPhotosAction} from '../reducer/photosReducer/types';
import {getPhotos} from '../../components/utils/getPhotos';
import {call, put, takeEvery} from 'redux-saga/effects';
import {errorRequest, successRequest} from '../action/photosAction';

export function* watcher() {
  yield takeEvery(PhotosActionTypes.GET_REQUEST_PHOTO, photoWorker);
}

function* photoWorker(action: IPhotosAction) {
  try {
    const photos: IApiData[] = yield call(
      getPhotos,
      action.payload.value,
      action.payload.page,
      action.payload.searchValue,
    );
    yield put(successRequest(photos));
  } catch (error) {
    console.log(error);
    yield put(errorRequest());
  }
}
