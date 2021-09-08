import {AuthActionTypes, IUserDataValue} from '../reducer/authReducer/types';

export function startAuth(id: string) {
  return {
    type: AuthActionTypes.AUTHORIZATION,
    payload: {id},
  };
}

export function authSuccess(
  name: string,
  surname: string,
  age: string = '',
  biography: string = '',
  gender: string = '',
  avatarUrl: string = '',
) {
  return {
    type: AuthActionTypes.AUTHORIZATION_SUCCESS,
    payload: {name, surname, age, biography, gender, avatarUrl},
  };
}

export function authFailure() {
  return {
    type: AuthActionTypes.AUTHORIZATION_FAILURE,
  };
}

export function setAuthWithoutReg() {
  return {
    type: AuthActionTypes.AUTH_WITHOUT_REG,
  };
}

export function signOutProfile() {
  return {
    type: AuthActionTypes.SIGN_OUT_PROFILE,
  };
}

export function registration(value: IUserDataValue) {
  return {
    type: AuthActionTypes.REGISTRATION,
    payload: value,
  };
}
