import produce from 'immer';
import { ReactNode } from 'react';
import { Dispatch } from 'redux';
import { handleActions } from 'redux-actions';

// *** ACTION TYPE
const SHOW_MODAL = 'modal/CREATE_MODAL';
const DISMISS_MODAL = 'modal/DISMISS_MODAL';

// *** ACTION FUNCTION
export const show = (label: string, component: ReactNode) => (
  dispatch: Dispatch
) => {
  dispatch({ type: SHOW_MODAL, payload: { label, component } });
};

export const dismiss = (dispatch: Dispatch) => {
  dispatch({ type: DISMISS_MODAL });
};

// *** INITIAL STATE
export interface ModalState {
  label: string | null;
  component: ReactNode;
}

const initState: ModalState = {
  label: null,
  component: null,
};

// *** REDUCER
export default handleActions<ModalState, any>(
  {
    [SHOW_MODAL]: (state, action) =>
      produce(state, (draft: ModalState) => {
        const { label, component } = action.payload;
        draft.label = label;
        draft.component = component;
      }),
    [DISMISS_MODAL]: (state, action) =>
      produce(state, draft => {
        draft.component = null;
      }),
  },
  initState
);
