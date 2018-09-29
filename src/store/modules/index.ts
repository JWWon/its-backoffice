import { combineReducers } from 'redux';
import auth, { AuthState } from './auth';
import modal, { ModalState } from './modal';
import sidebar, { SidebarState } from './sidebar';

export interface StoreState {
  auth: AuthState;
  sidebar: SidebarState;
  modal: ModalState;
}

export default combineReducers({ auth, modal, sidebar });
