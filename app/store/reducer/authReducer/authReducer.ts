import {IAuthState, AuthActionTypes, IAuthAction} from './types';

const initialState: IAuthState = {
  isAut: false,
  isAuthWithoutReg: false,
  name: '',
  surname: '',
};

const authReducer = (state: IAuthState = initialState, action: IAuthAction) => {
  console.log(action);
  switch (action.type) {
    case AuthActionTypes.AUTHORIZATION:
      return {...state, isAut: action.payload};
    case AuthActionTypes.AUTH_WITHOUT_REG:
      return {...state, isAut: true, isAuthWithoutReg: true};
    case AuthActionTypes.SIGN_OUT_PROFILE:
      return {...state, isAut: false, isAuthWithoutReg: false};
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
