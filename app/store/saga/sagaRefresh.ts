import {getPhotos} from './../../components/utils/getPhotos';
import {IApiData} from './../../components/interface/index';
import {
  IPhotosAction,
  PhotosActionTypes,
} from './../reducer/photosReducer/types';
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
    yield put({
      type: PhotosActionTypes.GET_REFRESH_REQUEST_SUCCESS,
      payload: {photoData: photos},
    });

    yield put(refreshRequestSuccess());
  } catch (error) {
    console.log(error);
    yield put(refreshRequestFailure());
  }
}
