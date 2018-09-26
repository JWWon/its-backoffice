import produce from 'immer';
import moment, { Moment } from 'moment';
import { Dispatch } from 'redux';
import { handleActions } from 'redux-actions';

import { IState as IData } from 'containers/auth/LoginContainer';
import { saveAuth } from 'lib/storage/auth';

// *** ACTION TYPE
const LOGIN = 'auth/LOGIN';
const LOGOUT = 'auth/LOGOUT';

// *** ACTION FUNCTION
export const login = (data: IData) => (dispatch: Dispatch) => {
  const { email, password } = data;
  if (email && password) {
    const response = {
      info: {
        name: '박찬혁',
        thumbnail: null,
      },
      tokenExp: moment().add(14, 'days'),
    };

    saveAuth(response);
    setAuth(response)(dispatch);
  }
};

export const logout = () => (dispatch: Dispatch) => {
  dispatch({ type: LOGOUT });
};

export const setAuth = (info: IAuthState) => (dispatch: Dispatch) => {
  dispatch({ type: LOGIN, payload: info });
};

// *** INITIAL STATE
export interface IInfo {
  info: {
    name: string;
    thumbnail: string | null;
  } | null;
}

export interface IAuthState extends IInfo {
  tokenExp: Moment | null;
}

const initState: IAuthState = {
  info: null,
  tokenExp: null,
};

// *** REDUCER
export default handleActions<IAuthState, any>(
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
        (draft.info = null), (draft.tokenExp = null);
      }),
  },
  initState
);
