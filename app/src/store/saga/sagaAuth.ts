import {IApiData} from './../../interfaces/interfaces';
import {getImageUrlFromDb} from './../../utils/getImageUrlFromDB';
import {AuthActionTypes, IAuthAction} from '../reducer/authReducer/types';
import {call, put, takeEvery} from 'redux-saga/effects';
import {checkUserInDB} from '../../utils/checkUserInDB';
import {authFailure, authSuccess} from '../action/authAction';

interface IUserData {
  name: string;
  surname: string;
  photoData: Array<IApiData>;
  age?: string;
  biography?: string;
  gender?: string;
  avatarUrl?: string;
}

export function* authWatcher() {
  yield takeEvery(AuthActionTypes.AUTHORIZATION, authWorker);
}

function* authWorker(action: IAuthAction) {
  try {
    const userData: IUserData = yield call(checkUserInDB, action.payload.id);

    const avatarUrl: string = yield call(getImageUrlFromDb, action.payload.id);

    if (!userData) {
      yield put(authFailure());
      return;
    }

    yield put(
      authSuccess(
        userData?.name,
        userData?.surname,
        userData?.age,
        userData?.biography,
        userData?.gender,
        avatarUrl,
      ),
    );
  } catch (error) {
    console.log(error);
    yield put(authFailure());
  }
}
