import {IAuthState, AuthActionTypes, IAuthAction} from './types';

const initialState: IAuthState = {
  isAut: false,
  isAuthWithoutReg: false,
};

const authReducer = (state: IAuthState = initialState, action: IAuthAction) => {
  console.log(action.payload);
  switch (action.type) {
    case AuthActionTypes.AUTHORIZATION:
      return {...state, isAut: action.payload};
    case AuthActionTypes.AUTH_WITHOUT_REG:
      return {...state, isAut: true, isAuthWithoutReg: true};
    case AuthActionTypes.SIGN_OUT_PROFILE:
      return {...state, isAut: false, isAuthWithoutReg: false};
    default:
      return state;
  }
};

export default authReducer;
