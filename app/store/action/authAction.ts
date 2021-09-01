import {AuthActionTypes, IUserDataValue} from './../reducer/authReducer/types';

export function setAuth(
  value: boolean,
  id: string = '',
  name: string = '',
  surname: string = '',
) {
  return {
    type: AuthActionTypes.AUTHORIZATION,
    payload: {isAuth: value, id: id, name: name, surname},
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
