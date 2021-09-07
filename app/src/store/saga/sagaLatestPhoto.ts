import {IApiData} from '../../interfaces/interfaces';
import {getPhotos} from '../../utils/getPhotos';
import {IPhotosAction, PhotosActionTypes} from '../reducer/photosReducer/types';
import {takeEvery, call, put} from 'redux-saga/effects';
import {
  getLatestRequestFailure,
  getLatestRequestSuccess,
} from '../action/photosAction';

export function* watcherLatestPhoto() {
  yield takeEvery(
    PhotosActionTypes.GET_LATEST_PHOTO_REQUEST,
    workerLatestPhoto,
  );
}

function* workerLatestPhoto(action: IPhotosAction) {
  try {
    const photos: Array<IApiData> = yield call(
      getPhotos,
      action.payload.value,
      action.payload.page,
    );
    yield put(getLatestRequestSuccess(photos));
  } catch (error) {
    console.log(error);
    yield put(getLatestRequestFailure());
  }
}
