import {getImageUrlFromDb} from './../../utils/getImageUrlFromDB';
import {AuthActionTypes, IAuthAction} from '../reducer/authReducer/types';
import {call, put, takeEvery} from 'redux-saga/effects';
import {checkUserInDB} from '../../utils/checkUserInDB';
import {authFailure, authSuccess} from '../action/authAction';

export function* authWatcher() {
  yield takeEvery(AuthActionTypes.AUTHORIZATION, authWorker);
}

function* authWorker(action: IAuthAction) {
  try {
    const {name, surname, age, biography, gender} = yield call(
      checkUserInDB,
      action.payload.id,
    );

    const avatarUrl: string = yield call(getImageUrlFromDb, action.payload.id);

    console.log(avatarUrl);

    yield put(authSuccess(name, surname, age, biography, gender, avatarUrl));
  } catch (error) {
    console.log(error);
    yield put(authFailure());
  }
}
