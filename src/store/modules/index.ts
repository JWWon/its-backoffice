import { combineReducers } from 'redux';
import auth, { IAuthState } from './auth';
import sidebar, { ISidebarState } from './sidebar';

export interface IStoreState {
  auth: IAuthState;
  sidebar: ISidebarState;
}

export default combineReducers({ auth, sidebar });
