import {IAuthState, AuthActionTypes, IAuthAction} from './types';

const initialState: IAuthState = {
  isAuth: false,
  isAuthWithoutReg: false,
  id: '',
  name: '',
  surname: '',
};

const authReducer = (state: IAuthState = initialState, action: IAuthAction) => {
  switch (action.type) {
    case AuthActionTypes.AUTHORIZATION:
      return {...state, id: action.payload.id};
    case AuthActionTypes.AUTHORIZATION_SUCCESS:
      return {
        ...state,
        isAuth: true,
        name: action.payload.name,
        surname: action.payload.surname,
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
    default:
      return state;
  }
};

export default authReducer;
