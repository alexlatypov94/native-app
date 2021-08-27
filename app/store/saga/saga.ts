import {PhotosActionTypes, IPhotosAction} from '../reducer/photosReducer/types';
import {getPhotos} from '../../components/utils/getPhotos';
import {call, put, takeEvery} from 'redux-saga/effects';
import {errorRequest, successRequest} from '../action/photosAction';

export function* watcher() {
  yield takeEvery(PhotosActionTypes.GET_REQUEST_PHOTO, photoWorker);
}

function* photoWorker(action: IPhotosAction) {
  console.log(action);
  try {
    const photos: IPhotosAction = yield call(
      getPhotos,
      action.payload.value,
      action.payload.page,
    );
    yield put({
      type: PhotosActionTypes.GET_REQUEST_SUCCESS,
      payload: {photoData: photos},
    });
    yield put(successRequest());
  } catch (error) {
    console.log(error);
    yield put(errorRequest());
  }
}
