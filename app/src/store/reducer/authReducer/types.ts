export interface IAuthState {
  isAuth: boolean;
  isLoadingAuth: boolean;
  id: string;
  name: string;
  surname: string;
  age: string;
  biography: string;
  gender: string;
  avatarUrl: string;
  theme: string;
}

export enum AuthActionTypes {
  AUTHORIZATION = 'AUTHORIZATION',
  AUTHORIZATION_SUCCESS = 'AUTHORIZATION_SUCCESS',
  AUTHORIZATION_FAILURE = 'AUTHORIZATION_FAILURE',
  AUTH_WITHOUT_REG = 'AUTH_WITHOUT_REG',
  SIGN_OUT_PROFILE = 'SIGN_OUT_PROFILE',
  REGISTRATION = 'REGISTRATION',
  SET_USER_ID = 'SET_USER_ID',
  CHANGE_USER_THEME = 'CHANGE_USER_THEME',
}

export interface IAuthAction {
  type: AuthActionTypes;
  payload: IAuthState;
}

export interface IUserDataValue {
  name: string;
  surname: string;
}
