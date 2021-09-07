import {AuthActionTypes, IAuthAction} from '../reducer/authReducer/types';
import {call, put, takeEvery} from 'redux-saga/effects';
import {checkUserInDB} from '../../utils/checkUserInDB';
import {authFailure, authSuccess} from '../action/authAction';

export function* authWatcher() {
  yield takeEvery(AuthActionTypes.AUTHORIZATION, authWorker);
}

function* authWorker(action: IAuthAction) {
  try {
    const {name, surname} = yield call(checkUserInDB, action.payload.id);
    yield put(authSuccess(name, surname));
  } catch (error) {
    console.log(error);
    yield put(authFailure());
  }
}
