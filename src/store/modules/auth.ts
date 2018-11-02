import axios from 'axios';
import { Dispatch } from 'redux';
import { handleActions } from 'redux-actions';

import { IState as Data } from 'containers/auth/LoginContainer';
import { login as loginAction } from 'lib/networks/auth';
import { clearAuth, saveAuth } from 'lib/storage/auth';

// *** ACTION TYPE
const LOGIN = 'auth/LOGIN';
const LOGOUT = 'auth/LOGOUT';

// *** ACTION FUNCTION
export const login = (data: Data) => async (dispatch: Dispatch) => {
  const { email, password } = data;
  const response = await loginAction({ email, password });
  if (response) {
    saveAuth(response);
    setAuth(response)(dispatch);
  }
};

export const logout = (dispatch: Dispatch) => {
  clearAuth();
  delete axios.defaults.headers.common.authorization;
  dispatch({ type: LOGOUT });
};

export const setAuth = (auth: AuthState) => (dispatch: Dispatch) => {
  axios.defaults.headers.common.authorization = auth.token;
  dispatch({ type: LOGIN, payload: auth });
};

// *** INITIAL STATE
export interface AuthState {
  email: string | null;
  nickname: string | null;
  token: string | null;
}

const initState: AuthState = {
  email: null,
  nickname: null,
  token: null,
};

// *** REDUCER
export default handleActions<AuthState, any>(
  {
    [LOGIN]: (state, action) => ({ ...state, ...action.payload }),
    [LOGOUT]: () => ({ email: null, nickname: null, token: null }),
  },
  initState
);
