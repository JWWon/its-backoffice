import produce from 'immer';
import { Moment } from 'moment';
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
  dispatch({ type: LOGOUT });
};

export const setAuth = (auth: AuthState) => (dispatch: Dispatch) => {
  dispatch({ type: LOGIN, payload: auth });
};

// *** INITIAL STATE
export interface Info {
  info: {
    name: string;
    thumbnail: string | null;
  } | null;
}

export interface AuthState extends Info {
  tokenExp: Moment | null;
}

const initState: AuthState = {
  info: null,
  tokenExp: null,
};

// *** REDUCER
export default handleActions<AuthState, any>(
  {
    [LOGIN]: (state, action) => {
      const { info, tokenExp } = action.payload;
      return produce(state, draft => {
        draft.info = info;
        draft.tokenExp = tokenExp;
      });
    },
    [LOGOUT]: (state, action) =>
      produce(state, draft => {
        draft.info = null;
        draft.tokenExp = null;
      }),
  },
  initState
);
