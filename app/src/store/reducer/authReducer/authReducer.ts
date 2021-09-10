import {IAuthState, AuthActionTypes, IAuthAction} from './types';

const initialState: IAuthState = {
  isAuth: false,
  isAuthWithoutReg: false,
  id: '',
  name: '',
  surname: '',
  age: '',
  biography: '',
  gender: '',
  avatarUrl: '',
  theme: 'light',
};

const authReducer = (state: IAuthState = initialState, action: IAuthAction) => {
  switch (action.type) {
    case AuthActionTypes.AUTHORIZATION:
      return {...state, id: action.payload.id};
    case AuthActionTypes.AUTHORIZATION_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isAuthWithoutReg: false,
        name: action.payload.name,
        surname: action.payload.surname,
        age: action.payload.age,
        biography: action.payload.biography,
        gender: action.payload.gender,
        avatarUrl: action.payload.avatarUrl,
      };
    case AuthActionTypes.AUTHORIZATION_FAILURE:
      return {...state, isAuth: false};
    case AuthActionTypes.AUTH_WITHOUT_REG:
      return {...state, isAuth: true, isAuthWithoutReg: true};
    case AuthActionTypes.SIGN_OUT_PROFILE:
      return {...state, isAuth: false, isAuthWithoutReg: false};
    case AuthActionTypes.REGISTRATION:
      return {
        ...state,
        name: action.payload.name,
        surname: action.payload.surname,
      };
    case AuthActionTypes.RETURN_TO_REG:
      return {...state, isAuthWithoutReg: false, isAuth: false};
    case AuthActionTypes.CHANGE_USER_THEME:
      return {...state, theme: action.payload.theme};
    default:
      return state;
  }
};

export default authReducer;
