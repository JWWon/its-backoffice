import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

// *** ACTION TYPE
const LOGIN = 'auth/LOGIN';
const LOGOUT = 'auth/LOGOUT';

// *** ACTION FUNCTION
export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);

// *** INITIAL STATE
export interface IAuthState {
  auth: {
    name: string;
    thumbnail: string;
  } | null;
  tokenExp: Date | null;
}

const initState: IAuthState = {
  auth: null,
  tokenExp: null,
};

// *** REDUCER
export default handleActions<IAuthState, any>(
  {
    [LOGIN]: (state, action) => {
      const { auth, tokenExp } = action.payload.data;
      return produce(state, draft => {
        draft.auth = auth;
        draft.tokenExp = tokenExp;
      });
    },
    [LOGOUT]: (state, action) =>
      produce(state, draft => {
        (draft.auth = null), (draft.tokenExp = null);
      }),
  },
  initState
);
