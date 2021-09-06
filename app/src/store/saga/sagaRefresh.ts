import {getPhotos} from '../../utils/getPhotos';
import {IApiData} from '../../interfaces/interfaces';
import {IPhotosAction, PhotosActionTypes} from '../reducer/photosReducer/types';
import {takeEvery, call, put} from 'redux-saga/effects';
import {
  refreshRequestFailure,
  refreshRequestSuccess,
} from '../action/photosAction';

export function* watcherRefresh() {
  yield takeEvery(PhotosActionTypes.GET_REFRESH_REQUEST, workerRefresh);
}

function* workerRefresh(action: IPhotosAction) {
  try {
    const photos: Array<IApiData> = yield call(
      getPhotos,
      action.payload.value,
      action.payload.page,
    );
    yield put(refreshRequestSuccess(photos));
  } catch (error) {
    console.log(error);
    yield put(refreshRequestFailure());
  }
}
