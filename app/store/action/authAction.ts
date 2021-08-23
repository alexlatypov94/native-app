import {AuthActionTypes} from './../reducer/authReducer/types';

export function setAuth(value: boolean) {
  return {
    type: AuthActionTypes.AUTHORIZATION,
    payload: value,
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