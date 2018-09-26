import { createAction, handleActions } from 'redux-actions';

// *** ACTION TYPE
const SHOW_SIDEBAR = 'sidebar/SHOW_SIDEBAR';
const HIDE_SIDEBAR = 'sidebar/HIDE_SIDEBAR';

// *** ACTION FUNCTION
export const show = createAction(SHOW_SIDEBAR);
export const hide = createAction(HIDE_SIDEBAR);

// *** INITIAL STATE
export interface ISidebarState {
  show: boolean;
}

const initState: ISidebarState = {
  show: true,
};

// *** REDUCER
export default handleActions<ISidebarState>(
  {
    [SHOW_SIDEBAR]: state => ({ ...state, show: true }),
    [HIDE_SIDEBAR]: state => ({ ...state, show: false }),
  },
  initState
);
