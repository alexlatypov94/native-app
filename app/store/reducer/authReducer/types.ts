export interface IAuthState {
  isAut: boolean;
  isAuthWithoutReg: boolean;
}

export enum AuthActionTypes {
  AUTHORIZATION = 'AUTHORIZATION',
  AUTH_WITHOUT_REG = 'AUTH_WITHOUT_REG',
  SIGN_OUT_PROFILE = 'SIGN_OUT_PROFILE',
}

export interface IAuthAction {
  type: AuthActionTypes;
  payload: IAuthState;
}
