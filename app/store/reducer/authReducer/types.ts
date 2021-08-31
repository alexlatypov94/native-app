export interface IAuthState {
  isAut: boolean;
  isAuthWithoutReg: boolean;
  name: string;
  surname: string;
}

export enum AuthActionTypes {
  AUTHORIZATION = 'AUTHORIZATION',
  AUTH_WITHOUT_REG = 'AUTH_WITHOUT_REG',
  SIGN_OUT_PROFILE = 'SIGN_OUT_PROFILE',
  REGISTRATION = 'REGISTRATION',
}

export interface IAuthAction {
  type: AuthActionTypes;
  payload: IAuthState;
}

export interface IUserDataValue {
  name: string;
  surname: string;
}
