export interface IAuthState {
  isAuth: boolean;
  isAuthWithoutReg: boolean;
  id: string;
  name: string;
  surname: string;
}

export enum AuthActionTypes {
  AUTHORIZATION = 'AUTHORIZATION',
  AUTH_WITHOUT_REG = 'AUTH_WITHOUT_REG',
  SIGN_OUT_PROFILE = 'SIGN_OUT_PROFILE',
  REGISTRATION = 'REGISTRATION',
  SET_USER_ID = 'SET_USER_ID',
}

export interface IAuthAction {
  type: AuthActionTypes;
  payload: IAuthState;
}

export interface IUserDataValue {
  name: string;
  surname: string;
}
